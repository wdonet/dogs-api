// const response = {
//   "message": [
//       "https://images.dog.ceo/breeds/hound-afghan/n02088094_5345.jpg",
//   ],
//   "status": "success"
// };

// TODO test : https://images.dog.ceo/breeds/cockapoo/Scout.jpg
// TODO test : https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20191130_155610.jpg

const SUCCESS = 'success';

const IMG_REG_EXP = /breeds\/(\w+)(-(\w+))?\/(.*)_(\d+)\.jpg/;

const parseOneUrl = url => {
  const [, breed, , subBreed, code, id] = IMG_REG_EXP.exec(url) || [];
  return {
    breed, subBreed, id, code, url,
  };
}

module.exports = (data = {}) => {
  console.log('data', data);
  const { status, message } = data;
  if (status === SUCCESS && message) {
    console.log('message', message);
    if (Array.isArray(message)) {
      const results = message.map(parseOneUrl);
      return results.length === 1 ? results[0] : results;
    }
    result = parseOneUrl(message);
    console.log('result', result);
    return result;
  }
  throw new Error('Unable to parse response');
};
