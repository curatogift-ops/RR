const { transporter, formatEmailBody } = require('./_email-config');
const multiparty = require('multiparty');

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
        // Parse multipart form data
        const form = new multiparty.Form();

        const parseForm = () => new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                else resolve({ fields, files });
            });
        });

        const { fields, files } = await parseForm();

        // Convert fields to regular object (multiparty returns arrays)
        const data = {};
        Object.keys(fields).forEach(key => {
            data[key] = fields[key][0];
        });

        console.log('Received DSA Application:', data);

        // Process file attachments
        const attachments = [];
        Object.keys(files).forEach(fieldName => {
            files[fieldName].forEach(file => {
                attachments.push({
                    filename: file.originalFilename,
                    path: file.path
                });
            });
        });

        const mailOptions = {
            from: '"RR Trust Website" <info@rrtrustcapitalsolutions.com>',
            to: 'info@rrtrustcapitalsolutions.com',
            subject: `New DSA Partner Application: ${data.full_name}`,
            html: formatEmailBody('New DSA Partner Application', data),
            attachments: attachments
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'DSA Application submitted successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to submit DSA application' });
    }
};
