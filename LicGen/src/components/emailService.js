const nodemailer = require("nodemailer");

// Create a transporter using Gmail's SMTP server
const transporter = nodemailer.createTransport({
    service: "gmail", // Gmail as the email service provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

// Function to send email
const sendEmail = (toEmail, subject, message) => {
    const mailOptions = {
        from: 'Digispower LLC <digispowerllc@gmail.com>',
        to: toEmail,
        subject: subject,
        text: message,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
