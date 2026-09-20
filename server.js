const express = require("express");
const session = require("express-session");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const db = require("./config/db");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sendTelegramNotification = require("./telegram");
require("dotenv").config();
// ===== Password Reset Email System =====

const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const app = express();
const PORT = process.env.PORT || 3000; // Render নিজে PORT ঠিক করে দেয়, তাই env থেকে নেওয়া হচ্ছে

// JSON Data Receive করার জন্য
app.use(express.json());

// Session সেটআপ — login হলে এখানে user info রাখা হবে
app.use(session({
    secret: process.env.SESSION_SECRET || "amar_khub_gopon_chabi_2026",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // ১ দিন পর্যন্ত লগইন থাকবে
}));

// public Folder-এর File Browser-এ দেখানোর জন্য (ছবি upload ও এখান থেকেই serve হবে)
app.use(express.static("public"));

// ===== Complaint এর ছবি upload এর জন্য multer কনফিগ =====
const uploadDir = path.join(__dirname, "public", "uploads", "complaints");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        const allowed = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        if (allowed.includes(file.mimetype)) cb(null, true);
        else cb(new Error("শুধু ছবি (jpg, png, webp) আপলোড করা যাবে"));
    }
});

// Home Page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", async (req, res) => {

    const { name, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

        db.query(sql, [name, email, hashedPassword], (err, result) => {

           if (err) {
    console.log("SIGNUP DATABASE ERROR:", err);
    return res.json({
        success: false,
        message: "Database Error!"
    });
}

            res.json({
                success: true,
                message: "Account Created Successfully!"
            });

        });

    } catch (error) {

        res.json({
            success: false,
            message: "Server Error!"
        });

    }

});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.json({
                success: false,
                message: "Database Error!"
            });
        }

        if (result.length === 0) {
            return res.json({
                success: false,
                message: "Email পাওয়া যায়নি"
            });
        }

        const user = result[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.json({
                success: false,
                message: "Password ভুল"
            });
        }

        // ===== লগইন সফল হলে session এ user বসিয়ে দিচ্ছি =====
        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        res.json({
            success: true,
            message: "Login Successful"
        });

    });

});
// =======================================================
// FORGOT PASSWORD - SEND OTP
// =======================================================

app.post("/forgot-password", (req, res) => {

    const { email } = req.body;

    if (!email) {
        return res.json({
            success: false,
            message: "Email দিন"
        });
    }

    const cleanEmail = email.trim().toLowerCase();

    // User আছে কিনা check
    db.query(
        "SELECT id, name, email FROM users WHERE email = ?",
        [cleanEmail],
        async (err, result) => {

            if (err) {
                console.log(err);

                return res.json({
                    success: false,
                    message: "Database Error!"
                });
            }

            if (result.length === 0) {
                return res.json({
                    success: false,
                    message: "এই email দিয়ে কোনো account পাওয়া যায়নি"
                });
            }

            // 6 digit OTP
            const otp = Math.floor(100000 + Math.random() * 900000).toString();

            // OTP hash
            const otpHash = await bcrypt.hash(otp, 10);

            // OTP 10 মিনিট valid
            const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

            // পুরোনো OTP delete
            db.query(
                "DELETE FROM password_resets WHERE email = ?",
                [cleanEmail],
                (deleteErr) => {

                    if (deleteErr) {
                        console.log(deleteErr);

                        return res.json({
                            success: false,
                            message: "OTP তৈরি করতে সমস্যা হয়েছে"
                        });
                    }

                    // নতুন OTP save
                    db.query(
                        "INSERT INTO password_resets (email, otp_hash, expires_at) VALUES (?, ?, ?)",
                        [cleanEmail, otpHash, expiresAt],
                        async (insertErr) => {

                            if (insertErr) {
                                console.log(insertErr);

                                return res.json({
                                    success: false,
                                    message: "OTP save করতে সমস্যা হয়েছে"
                                });
                            }

                            try {

                                await mailTransporter.sendMail({
                                    from: `"আমাদের বাজার" <${process.env.EMAIL_USER}>`,
                                    to: cleanEmail,
                                    subject: "আমাদের বাজার - Password Reset OTP",
                                    html: `
                                        <div style="font-family: Arial, sans-serif; padding: 20px;">
                                            <h2>আমাদের বাজার</h2>

                                            <p>আপনার password reset করার জন্য OTP:</p>

                                            <div style="
                                                font-size: 32px;
                                                font-weight: bold;
                                                letter-spacing: 8px;
                                                margin: 20px 0;
                                            ">
                                                ${otp}
                                            </div>

                                            <p>
                                                এই OTP <strong>10 মিনিট</strong> পর্যন্ত valid থাকবে।
                                            </p>

                                            <p>
                                                আপনি যদি password reset request না করে থাকেন,
                                                তাহলে এই email ignore করুন।
                                            </p>
                                        </div>
                                    `
                                });

                                res.json({
                                    success: true,
                                    message: "OTP আপনার email-এ পাঠানো হয়েছে"
                                });

                            } catch (emailError) {

                                console.log("Email Error:", emailError);

                                // Email না গেলে OTP record delete
                                db.query(
                                    "DELETE FROM password_resets WHERE email = ?",
                                    [cleanEmail]
                                );

                                res.json({
                                    success: false,
                                    message: "Email পাঠানো যায়নি"
                                });
                            }
                        }
                    );
                }
            );
        }
    );
});


// =======================================================
// RESET PASSWORD - VERIFY OTP + UPDATE PASSWORD
// =======================================================

app.post("/reset-password", (req, res) => {

    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        return res.json({
            success: false,
            message: "সব তথ্য পূরণ করুন"
        });
    }

    if (newPassword.length < 6) {
        return res.json({
            success: false,
            message: "Password কমপক্ষে ৬ character হতে হবে"
        });
    }

    const cleanEmail = email.trim().toLowerCase();

    db.query(
        "SELECT * FROM password_resets WHERE email = ? ORDER BY created_at DESC LIMIT 1",
        [cleanEmail],
        async (err, result) => {

            if (err) {
                console.log(err);

                return res.json({
                    success: false,
                    message: "Database Error!"
                });
            }

            if (result.length === 0) {
                return res.json({
                    success: false,
                    message: "OTP পাওয়া যায়নি অথবা নতুন OTP নিন"
                });
            }

            const resetData = result[0];

            // OTP expired কিনা
            if (new Date(resetData.expires_at) < new Date()) {

                db.query(
                    "DELETE FROM password_resets WHERE id = ?",
                    [resetData.id]
                );

                return res.json({
                    success: false,
                    message: "OTP-এর সময় শেষ হয়ে গেছে"
                });
            }

            // OTP check
            const otpMatch = await bcrypt.compare(
                otp.toString(),
                resetData.otp_hash
            );

            if (!otpMatch) {
                return res.json({
                    success: false,
                    message: "ভুল OTP"
                });
            }

            // নতুন password hash
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Password update
            db.query(
                "UPDATE users SET password = ? WHERE email = ?",
                [hashedPassword, cleanEmail],
                (updateErr) => {

                    if (updateErr) {
                        console.log(updateErr);

                        return res.json({
                            success: false,
                            message: "Password update করতে সমস্যা হয়েছে"
                        });
                    }

                    // OTP একবার ব্যবহার হওয়ার পর delete
                    db.query(
                        "DELETE FROM password_resets WHERE email = ?",
                        [cleanEmail]
                    );

                    res.json({
                        success: true,
                        message: "Password successfully changed"
                    });
                }
            );
        }
    );
});

// ===== Logout =====
app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.json({ success: false, message: "লগআউট করতে সমস্যা হয়েছে" });
        }
        res.clearCookie("connect.sid");
        res.json({ success: true, message: "লগআউট সফল হয়েছে" });
    });
});
// ===== Logged-in User Profile =====
app.get("/profile", (req, res) => {

    if (!req.session.user) {
        return res.status(401).json({
            success: false,
            message: "লগইন করা নেই"
        });
    }

    res.json({
        success: true,
        name: req.session.user.name,
        email: req.session.user.email
    });

});

// ===== Session আছে কিনা চেক করার জন্য =====
app.get("/check-session", (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
});

// ===== Complaint (অভিযোগ) জমা দেওয়া =====
app.post("/complaints", upload.single("image"), (req, res) => {

    const { productName, complaintType, description } = req.body;

    if (!productName || !complaintType || !description) {
        return res.json({ success: false, message: "সব ঘর পূরণ করুন" });
    }

    const userId = (req.session.user && req.session.user.id) || null;
    const imagePath = req.file ? `/uploads/complaints/${req.file.filename}` : null;

    const sql = `INSERT INTO complaints (user_id, product_name, complaint_type, description, image_path)
                 VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [userId, productName, complaintType, description, imagePath], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে" });
        }

        // ===== Telegram এ notification পাঠানো =====
        sendTelegramNotification(
            `⚠️ <b>নতুন অভিযোগ!</b>\nProduct: ${productName}\nType: ${complaintType}\nDescription: ${description}`
        );

        res.json({ success: true, message: "অভিযোগ সফলভাবে জমা হয়েছে" });
    });

});

// ===== একসাথে অনেক প্রোডাক্ট অর্ডার (কার্ট চেকআউট) =====
app.post("/orders/bulk", (req, res) => {

    const { items, deliveryAddress, phone, note } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
        return res.json({ success: false, message: "কার্টে কোনো প্রোডাক্ট নেই" });
    }
    if (!deliveryAddress || !phone) {
        return res.json({ success: false, message: "ঠিকানা ও ফোন নম্বর দিন" });
    }

    const userId = (req.session.user && req.session.user.id) || null;
    const orderGroup = "grp_" + Date.now() + "_" + Math.floor(Math.random() * 10000);

    const sql = `INSERT INTO orders (user_id, product_name, category, price, market, quantity, delivery_address, phone, note, order_group)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    let completed = 0;
    let hasError = false;

    items.forEach((item) => {
        const qty = item.quantity && item.quantity > 0 ? item.quantity : 1;
        db.query(
            sql,
            [userId, item.name, item.category, item.price, item.market, qty, deliveryAddress, phone, note || null, orderGroup],
            (err) => {
                completed++;
                if (err) {
                    console.log(err);
                    hasError = true;
                }
                if (completed === items.length) {
                    if (hasError) {
                        return res.json({ success: false, message: "কিছু প্রোডাক্ট অর্ডার করতে সমস্যা হয়েছে" });
                    }

                    // ===== Telegram এ notification পাঠানো =====
                    const itemList = items
                        .map((i) => `- ${i.name} (x${i.quantity || 1})`)
                        .join("\n");
                    sendTelegramNotification(
                        `🛒 <b>নতুন অর্ডার (Bulk)!</b>\n${itemList}\nAddress: ${deliveryAddress}\nPhone: ${phone}`
                    );

                    res.json({ success: true, message: "সব প্রোডাক্টের অর্ডার সফলভাবে জমা হয়েছে", orderGroup });
                }
            }
        );
    });

});

// ===== Order (একক অর্ডার) জমা দেওয়া =====
app.post("/orders", (req, res) => {

    const { productName, category, price, market, quantity, deliveryAddress, phone, note } = req.body;

    if (!productName || !deliveryAddress || !phone) {
        return res.json({ success: false, message: "প্রয়োজনীয় তথ্য দিন (ঠিকানা ও ফোন নম্বর)" });
    }

    const userId = (req.session.user && req.session.user.id) || null;
    const qty = quantity && quantity > 0 ? quantity : 1;

    const sql = `INSERT INTO orders (user_id, product_name, category, price, market, quantity, delivery_address, phone, note)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [userId, productName, category, price, market, qty, deliveryAddress, phone, note || null], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে" });
        }

        // ===== Telegram এ notification পাঠানো =====
        sendTelegramNotification(
            `🛒 <b>নতুন অর্ডার!</b>\nProduct: ${productName}\nQty: ${qty}\nAddress: ${deliveryAddress}\nPhone: ${phone}`
        );

        res.json({ success: true, message: "অর্ডার সফলভাবে জমা হয়েছে", orderId: result.insertId });
    });

});

// ===== লগইন করা user এর নিজের সব অর্ডার দেখা =====
app.get("/my-orders", (req, res) => {

    if (!req.session.user) {
        return res.json({ success: false, message: "লগইন করা নেই" });
    }

    const sql = "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC";

    db.query(sql, [req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে" });
        }
        res.json({ success: true, orders: result });
    });

});

// ===== Admin Dashboard (Basic Auth দিয়ে সুরক্ষিত) =====
function requireAdmin(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.set("WWW-Authenticate", 'Basic realm="Admin Area"');
        return res.status(401).send("Authentication required");
    }

    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
    const [user, pass] = credentials.split(":");

    const adminUser = process.env.ADMIN_USER || "admin";
    const adminPass = process.env.ADMIN_PASS || "changeme";

    if (user === adminUser && pass === adminPass) {
        return next();
    }

    res.set("WWW-Authenticate", 'Basic realm="Admin Area"');
    return res.status(401).send("Invalid credentials");
}

// ===== admin.css, admin.js সার্ভ করার জন্য (password protected) =====
app.use("/admin", requireAdmin, express.static(path.join(__dirname, "admin")));

app.get("/admin", requireAdmin, (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "admin.html"));
});

app.get("/admin/data", requireAdmin, (req, res) => {
    const data = {};

    db.query("SELECT id, name, email, created_at FROM users ORDER BY created_at DESC", (err, users) => {
        if (err) return res.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে" });
        data.users = users;

        db.query("SELECT * FROM orders ORDER BY created_at DESC", (err, orders) => {
            if (err) return res.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে" });
            data.orders = orders;

            db.query("SELECT * FROM complaints ORDER BY created_at DESC", (err, complaints) => {
                if (err) return res.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে" });
                data.complaints = complaints;

                res.json({ success: true, ...data });
            });
        });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is Running: http://localhost:${PORT}`);
});
