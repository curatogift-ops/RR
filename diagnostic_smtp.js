const nodemailer = require('nodemailer');

const email = 'info@rrtrustcapitalsolutions.com';
const password = 'yfyx xqok acfn thdu'; // with spaces
const passwordNoSpaces = password.replace(/ /g, '');

async function testProvider(name, config) {
    console.log(`\n--- Testing ${name} ---`);
    const transporter = nodemailer.createTransport(config);
    try {
        await transporter.verify();
        console.log(`✅ SUCCESS: Connected to ${name}`);
        return true;
    } catch (error) {
        console.log(`❌ FAILED: ${name}`);
        console.log(`Error: ${error.message}`);
        if (error.response) console.log(`Response: ${error.response}`);
        return false;
    }
}

async function runDiagnostics() {
    // 1. Gmail with App Password (Standard)
    await testProvider('Gmail (Standard)', {
        service: 'gmail',
        auth: { user: email, pass: password }
    });

    // 2. Gmail with No Spaces
    await testProvider('Gmail (No Spaces)', {
        service: 'gmail',
        auth: { user: email, pass: passwordNoSpaces }
    });

    // 3. Titan Email (Port 465)
    await testProvider('Titan Email (465)', {
        host: 'smtp.titan.email',
        port: 465,
        secure: true,
        auth: { user: email, pass: password }
    });

    // 4. Titan Email (No Spaces, 465)
    await testProvider('Titan Email (No Spaces)', {
        host: 'smtp.titan.email',
        port: 465,
        secure: true,
        auth: { user: email, pass: passwordNoSpaces }
    });
}

runDiagnostics();
