const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// ---------------------------------------------------------------------
const app = express();
app.use(bodyParser.json());
app.use(cors());

// ------------------------------------------------------------------------
app.use(function (req, res, next) {
    const requestIncomingTime = Date.now();
    res.on('finish', () => {
        const requestEndingTime = Date.now();
        const elapsedTime = requestEndingTime - requestIncomingTime;
        console.debug(`[Debug]: [${req.method}] ${req.originalUrl} [${elapsedTime} ms]`);
    });
    console.log(`[log]: [${req.method}] ${req.originalUrl}`)
    next();
});

app.use('/api', require('./src/routes/email'));

app.use('*', (req, res) => {
    console.log('page not found')
    res.status(404).send('<h1>page not found</h1>')
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
