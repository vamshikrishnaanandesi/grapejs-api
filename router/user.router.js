const createController = require('../routes/users');
const getController = require('../routes/getUser');
const express = require('express');
const createRouter = express.Router();

createRouter
    .route('/')
    .post(createController)

createRouter
    .route('/')
    .get(getController)

module.exports = createRouter;