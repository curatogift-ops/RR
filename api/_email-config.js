const nodemailer = require('nodemailer');

// Email Configuration (Titan Email)
const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
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

module.exports = { transporter, formatEmailBody };
