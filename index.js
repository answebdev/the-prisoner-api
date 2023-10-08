const express = require('express');
const episode = require('./api/episode');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/api/episode', episode);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));