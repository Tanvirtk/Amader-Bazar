const axios = require("axios");

async function sendTelegramNotification(message) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML"
    });
  } catch (err) {
    console.error("Telegram notification failed:", err.message);
  }
}

module.exports = sendTelegramNotification;