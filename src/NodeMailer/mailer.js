import nodemailer from "nodemailer"


export const sendingMessage = () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from:process.env.EMAIL,
        to:process.env.EMAIL,
        subject:"Покупатель",
        text:"Товари"
    }
    transporter.sendMail(mailOptions, err => {console.log(err)})
}
