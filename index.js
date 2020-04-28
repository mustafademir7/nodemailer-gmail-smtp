const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    const params = req.body;
    let result = {};
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'our@gmail.com',
            pass: 'XXXXXXX',
        },
    });
    const mailOptions = {
        from: 'our@gmail.com', //sender address
        to: 'target@domain.com,more@domain.com',
        subject: 'TEST MAIL', // Subject line
        html: params.html
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) result =  err;
        else result = info;
        res.json(result);
    });
});

app.listen(8080, () => {
    console.log(`Listening to 8080`);
});
