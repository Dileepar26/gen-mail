const { groqAiPromptGenerator } = require('../../lib/groqAI');
const { mailSender } = require('../../lib/nodeMailer');
require('dotenv').config();

const generateEmailBody = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt && prompt.length > 0) {
            res.status(400).json({
                success: false,
                message: 'please provide the prompt to generate mail body'
            })
        }
        const groqRes = await groqAiPromptGenerator(prompt);
        if (!groqRes.success) {
            return res.status(500).json({
                success: false,
                message: 'internal error'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'successfully fetch the data',
            data: groqRes.data
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'internal error'
        })
    }
}

const sendMail = async (req, res) => {
    try {
        const { email, subject, emailBody } = req.body;
        if (email.length > 0 && subject.length > 0 && emailBody.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'one of the field is missing'
            })
        }
        const mailRes = mailSender(email, subject, emailBody);
        return res.status(200).json({
            success: true,
            message: 'successfully mail sent'
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'internal error'
        })
    }
}

module.exports = {
    sendMail,
    generateEmailBody
}
