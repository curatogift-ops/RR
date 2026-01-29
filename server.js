const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if you want to run the whole site from here, strictly not required if using file:// but good for testing)
app.use(express.static(__dirname));

// Multer setup for file uploads (store in memory to send as attachment directly)
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Email Configuration (Titan Email)
const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


// Helper function to format email body
const formatEmailBody = (title, data) => {
    let body = `<h2>${title}</h2><table style="width: 100%; border-collapse: collapse;">`;
    for (const [key, value] of Object.entries(data)) {
        // Skip empty or internal fields
        if (value && key !== 'loan_type' && key !== 'products' && key !== 'sourcing_style') {
            body += `
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 40%;">${key.replace(/_/g, ' ').toUpperCase()}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
                </tr>
            `;
        }
    }

    // Handle arrays specifically if any
    if (data.products && Array.isArray(data.products)) {
        body += `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">INTERESTED PRODUCTS</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${data.products.join(', ')}</td>
            </tr>
        `;
    }

    if (data.sourcing_style && Array.isArray(data.sourcing_style)) {
        body += `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">SOURCING STYLE</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${data.sourcing_style.join(', ')}</td>
            </tr>
        `;
    }

    body += `</table>`;
    return body;
};

// 1. Submit Loan Enquiry (Quick Inquiry)
app.post('/submit-loan-enquiry', async (req, res) => {
    console.log('Received Loan Enquiry:', req.body);
    const data = req.body;

    const mailOptions = {
        from: '"RR Trust Website" <support@rrtc.in>',
        to: 'support@rrtc.in',
        subject: `New Loan Inquiry: ${data.full_name} - ${data.loan_type}`,
        html: formatEmailBody('New Quick Loan Inquiry', data)
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Enquiry sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send enquiry' });
    }
});

// 2. Submit Loan Application (Detailed)
app.post('/submit-loan-application', upload.any(), async (req, res) => {
    console.log('Received Loan Application:', req.body);
    const data = req.body;
    const files = req.files;

    const attachments = files.map(file => ({
        filename: file.originalname,
        content: file.buffer
    }));

    const mailOptions = {
        from: '"RR Trust Website" <support@rrtc.in>',
        to: 'support@rrtc.in',
        subject: `New Application: ${data.full_name} - ${data.loan_type}`,
        html: formatEmailBody(`New Loan Application (${data.loan_type})`, data),
        attachments: attachments
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to submit application' });
    }
});

// 3. Submit DSA Application
app.post('/submit-dsa-application', upload.any(), async (req, res) => {
    console.log('Received DSA Application:', req.body);
    const data = req.body;
    const files = req.files;

    const attachments = files.map(file => ({
        filename: file.originalname,
        content: file.buffer
    }));

    const mailOptions = {
        from: '"RR Trust Website" <support@rrtc.in>',
        to: 'support@rrtc.in',
        subject: `New DSA Partner Application: ${data.full_name}`,
        html: formatEmailBody('New DSA Partner Application', data),
        attachments: attachments
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'DSA Application submitted successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to submit DSA application' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`To enable email sending, please ensure you are running this server.`);
});
