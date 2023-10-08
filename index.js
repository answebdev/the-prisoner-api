const express = require('express');
const episodes = require('./api/episodes');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/episodes', episodes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));