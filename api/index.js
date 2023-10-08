const rateLimit = require('express-rate-limit');
const cors = require('cors');
const base = require('../routes/base');
const episodes = require('../routes/episodes');

const app = require('express')();

// Rate Limiting
const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    max: 10000,
});

app.use(limiter);

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/', base);
app.use('/episodes', episodes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));