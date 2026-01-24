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

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text: message,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }

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