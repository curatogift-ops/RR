const { transporter, formatEmailBody } = require('./_email-config');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        console.log('Received Loan Enquiry:', req.body);
        const data = req.body;

        const mailOptions = {
            from: '"RR Trust Website" <info@rrtrustcapitalsolutions.com>',
            to: 'info@rrtrustcapitalsolutions.com',
            subject: `New Loan Inquiry: ${data.full_name} - ${data.loan_type}`,
            html: formatEmailBody('New Quick Loan Inquiry', data)
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Enquiry sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send enquiry' });
    }
};
