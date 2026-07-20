const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "ajker_bazar",
    port: process.env.DB_PORT || 3306,
    // Aiven/cloud MySQL এর জন্য SSL লাগে, local XAMPP এ লাগে না
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined
});

connection.connect((err) => {
    if (err) {
        console.log("❌ Database Connection Failed!");
        console.log(err);
    } else {
        console.log("✅ Database Connected Successfully!");
    }
});

module.exports = connection;