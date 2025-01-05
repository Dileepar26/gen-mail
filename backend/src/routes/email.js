const router = require('express').Router();
const { generateEmailBody, sendMail } = require('../controllers/email');


router.post('/generate-email-body', generateEmailBody);
router.post('/send-mail', sendMail);

module.exports = router