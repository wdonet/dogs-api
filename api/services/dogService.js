const axios = require('axios');
const parseResponse = require('../utils/parser');

const DOG_URL = 'https://dog.ceo/api';
const ALL_SIZE = 3;

// https://dog.ceo/api/breed/hound/images/random
// const oneRandom = {
//   "message": [
//       "https://images.dog.ceo/breeds/hound-afghan/n02088094_5345.jpg",
//   ],
//   "status": "success"
// };

const get = async breed => {
  try {
    const response = await axios.get(`${DOG_URL}/breed/${breed}/images/random`);
    return parseResponse(response && response.data);
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

// https://dog.ceo/api/breeds/image/random/3
// const dataRandom = {
//   "message": [
//       "https://images.dog.ceo/breeds/vizsla/n02100583_1214.jpg",
//       "https://images.dog.ceo/breeds/puggle/IMG_144409.jpg",
//       "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2324.jpg"
//   ],
//   "status": "success"
// };

const getAll = async () => {
  try {
    const response = await axios.get(`${DOG_URL}/breeds/image/random/${ALL_SIZE}`);
    return parseResponse(response && response.data);
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

module.exports = {
  get,
  getAll,
};
