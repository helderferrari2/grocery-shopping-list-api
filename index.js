const express = require('express');
const cors = require('cors');
require('dotenv').config();
const helmet = require('helmet');
const routes = require('./src/routes/v1');

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.listen(process.env.APP_PORT);
