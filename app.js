const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./constants/config');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const analyzer = require('./routes/items');
app.use('/api/items', analyzer);

const db_url = config.DBE;
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo database connection error...'));
db.once('open', function () {
    console.log('Connected to mongo database successfully...');
});

const port = config.PORT;

app.listen(port, () => {
    console.log('App listening on port ' + port);
});

module.exports = app;