const nodemailer = require('nodemailer');

async function test() {
    console.log('Testing with spaces...');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info@rrtrustcapitalsolutions.com',
            pass: 'yfyx xqok acfn thdu'
        }
    });

    try {
        await transporter.verify();
        console.log('SUCCESS with spaces!');
        return;
    } catch (error) {
        console.error('FAILED with spaces:', error.responseCode, error.response);
    }

    console.log('Testing WITHOUT spaces...');
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info@rrtrustcapitalsolutions.com',
            pass: 'yfyx xqok acfn thdu'.replace(/ /g, '')
        }
    });

    try {
        await transporter.verify();
        console.log('SUCCESS with NO spaces!');
    } catch (error) {
        console.error('FAILED with NO spaces:', error.responseCode, error.response);
    }
}

test();
