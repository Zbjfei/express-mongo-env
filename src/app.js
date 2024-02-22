const express = require('express');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares');

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

const employees = require('./routes/employees');

// http://127.0.0.1:8080/api/employees/
app.use('/api/employees', employees);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
