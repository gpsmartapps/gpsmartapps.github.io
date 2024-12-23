const nodemailer = require('nodemailer');

async function sendLicenseEmail(to, licenseKey) {
    const emailBody = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #ffffff;">
            <img src="https://gpsmartapps.github.io/CECePortal/assets/logo/logo2.png" alt="Company Logo" style="width: 200px; height: auto; display: block; margin: 0 auto;">
            
            <div style="background-color: rgba(0, 0, 0, 0.05); padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
                <h2 style="text-align: center; color: #333;">License Key Generated</h2>
                <p style="font-size: 16px;">Dear User,</p>
                <p style="font-size: 16px;">
                    Your license key has been successfully generated. Please find your license key below:
                </p>
                <p style="font-size: 16px; text-align: center;">
                    <strong>License Key:</strong> ${licenseKey}
                </p>
                <p style="font-size: 16px; text-align: center;">
                    Need help? Ask at <a href="mailto:digispowerllc@gmail.com">Write to our Support</a> or visit our 
                    <a href="http://127.0.0.1:3000/CECePortal/contact-us.html" target="_blank">Contact Support</a>.
                </p>
            </div>
            
            <footer style="margin-top: 20px; font-size: 14px; text-align: center; color: #777;">
                <p>Digispower LLC</p>
                <p>540, Musterstraße, Germany.</p>
                <div style="margin-top: 10px;">
                    <a href="#" style="margin: 0 10px;">Facebook</a>
                    <a href="#" style="margin: 0 10px;">Instagram</a>
                    <a href="#" style="margin: 0 10px;">Twitter</a>
                    <a href="#" style="margin: 0 10px;">Youtube</a>
                </div>
                <p>Copyright © 2024 Digispower LLC. All rights reserved.</p>
            </footer>
        </div>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: 'Digispower LLC <digispowerllc@gmail.com>',
        to: to,
        subject: 'Your Generated License Key',
        html: emailBody
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
}

module.exports = sendLicenseEmail;