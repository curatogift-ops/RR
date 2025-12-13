const nodemailer = require('nodemailer');

const email = 'info@rrtrustcapitalsolutions.com';
const password = 'yfyx xqok acfn thdu';

async function testname() {
    console.log('TEST_START');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: email, pass: password }
    });
    try {
        await transporter.verify();
        console.log('RESULT: SUCCESS');
    } catch (e) {
        console.log('RESULT: FAILED ' + e.responseCode);
    }
}
testname();
