const base = require('../routes/base');
const episodes = require('../routes/episodes');
const app = require('express')();

const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/', base);
app.use('/episodes', episodes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));