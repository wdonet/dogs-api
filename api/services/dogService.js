const axios = require('axios');
const parseResponse = require('../utils/parser');

const DOG_URL = 'https://dog.ceo/api';
const ALL_SIZE = 3;

const get = async breed => {
  try {
    const response = await axios.get(`${DOG_URL}/breed/${breed}/images/random`);
    return parseResponse(response && response.data);
  } catch (error) {
    return { error: error.message };
  }
};

const getAll = async () => {
  try {
    const response = await axios.get(`${DOG_URL}/breeds/image/random/${ALL_SIZE}`);
    return parseResponse(response && response.data);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  get,
  getAll,
};
