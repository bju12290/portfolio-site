require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

app.post('/api/submit', (req, res) => {
    const { name, email, message } = req.body

    sendEmail(name, email, message)

    res.json({message: 'Form data submitted successfully.'})
})

function sendEmail(name, email, message) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_TO,
        subject: 'Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email not sent: ', error)
        } else {
            console.log('Email sent:', info.response)
        }
    })
}

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    if(process.env.EMAIL_USERNAME) { 
        console.log('It is set!'); 
    }
    else { 
        console.log('No set!'); 
    }
});