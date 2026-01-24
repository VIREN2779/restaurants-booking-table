const axios = require('axios');

exports.handler = async (event) => {
    try {
        const data = JSON.parse(event.body);

        const message = `
🍽 New Table Booking

📅 Day: ${data.day}
⏰ Time: ${data.hours}
👤 Name: ${data.fullName}
📞 Phone: ${data.phoneNumber}
👥 Persons: ${data.howManyPersons}
    `;

        const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

        await axios.post(url, {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: "Sent to Telegram" }),
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message }),
        };
    }
};