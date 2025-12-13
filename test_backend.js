const http = require('http');

const data = JSON.stringify({
    loan_type: 'personal',
    full_name: 'Test Connectivity User',
    mobile: '1234567890',
    email: 'test@example.com',
    city: 'Test City',
    income: '50000',
    loan_amount: '100000'
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/submit-loan-enquiry',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(data);
req.end();
