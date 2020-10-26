const SUCCESS = 'success';

const IMG_REG_EXP = /breeds\/(\w+)(-(\w+))?\/([a-zA-Z0-9]+)(_(\d+))?/;

const parseOneUrl = url => {
  const [, breed, , subBreed, code, , id] = IMG_REG_EXP.exec(url) || [];
  return {
    breed, subBreed, id, code, url,
  };
}

const validate = data => {
  if (!data
    || !data.message || (!Array.isArray(data.message) && typeof data.message !== 'string')
    || !data.status || data.status !== SUCCESS) {
    throw new Error('Unable to parse response');
  }
}

module.exports = (data = {}) => {
  validate(data)
  const { message } = data;
  if (Array.isArray(message)) {
    const results = message.map(parseOneUrl);
    return results.length === 1 ? results[0] : results;
  }
  result = parseOneUrl(message);
  return result;
};
