const axios = require('axios');
const { get } = require('./dogService');

jest.mock('axios')

describe('dogService', () => {
  const breed = 'hound';

  it('should fetch data and parse response', async () => {
    const data = {
      "message": [
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_5345.jpg",
      ],
      "status": "success"
    };
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    const response = {
      "breed": "hound",
      "code": "n02088094",
      "id": "5345",
      "subBreed": "afghan",
      "url": "https://images.dog.ceo/breeds/hound-afghan/n02088094_5345.jpg",
    }
    expect(get(breed)).resolves.toEqual(response);
  });

})

