const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(morgan());
app.use(cors());
app.use(bodyParser());

const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/blog-post-app';
mongoose.connect(mongoUri);

require('./router')(app);

const port = 5858;

app.listen(port, () => console.log(`listening on ${port} `));
