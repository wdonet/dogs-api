const express = require('express');
const dogsRouter = express.Router();
const dogsController = require('../controllers/dogsController')

dogsRouter.route('/')
  .get(dogsController.listAll)

dogsRouter.route('/:breed')
  .get(dogsController.getSingleDog)

module.exports = dogsRouter;
