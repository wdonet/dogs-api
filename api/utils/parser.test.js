const parser = require('./parser');

describe('parser', () => {

  it('should build object with breed only', () => {
    const data = {
      status: 'success',
      message: 'https://images.dog.ceo/breeds/vizsla/n02100583_1214.jpg'
    };
    expect(parser(data)).toStrictEqual({
      'breed': 'vizsla',
      'code': 'n02100583',
      'id': '1214',
      'subBreed': undefined,
      'url': 'https://images.dog.ceo/breeds/vizsla/n02100583_1214.jpg',
    });
  });

  it('should build object with breed only in simple format', () => {
    const data = {
      status: 'success',
      message: 'https://images.dog.ceo/breeds/cockapoo/Scout.jpg'
    };
    expect(parser(data)).toStrictEqual({
      'breed': 'cockapoo',
      'code': 'Scout',
      'id': undefined,
      'subBreed': undefined,
      'url': 'https://images.dog.ceo/breeds/cockapoo/Scout.jpg',
    });
  });

  it('should build object with subreed', () => {
    const data = {
      status: 'success',
      message: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_5345.jpg'
    };
    expect(parser(data)).toStrictEqual({
      'breed': 'hound',
      'code': 'n02088094',
      'id': '5345',
      'subBreed': 'afghan',
      'url': 'https://images.dog.ceo/breeds/hound-afghan/n02088094_5345.jpg',
    });
  });

  it('should build object with subreed and IMG format', () => {
    const data = {
      status: 'success',
      message: 'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20191130_155610.jpg'
    };
    expect(parser(data)).toStrictEqual({
      'breed': 'ovcharka',
      'code': 'IMG',
      'id': '20191130',
      'subBreed': 'caucasian',
      'url': 'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20191130_155610.jpg',
    });
  });

  it('should build array of images', () => {
    const data = {
      status: 'success',
      message: [
        'https://images.dog.ceo/breeds/puggle/IMG_144409.jpg',
        'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2324.jpg',
      ],
    };
    expect(parser(data)).toStrictEqual([
      {
        'breed': 'puggle',
        'code': 'IMG',
        'id': '144409',
        'subBreed': undefined,
        'url': 'https://images.dog.ceo/breeds/puggle/IMG_144409.jpg',
      },
      {
        'breed': 'spaniel',
        'code': 'n02101388',
        'id': '2324',
        'subBreed': 'brittany',
        'url': 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2324.jpg',
      },
    ]);
  });

  it('should throw error if invalid parameter or not success', () => {
    expect(() => {
      parser(null)
    }).toThrow(Error);
    expect(() => {
      parser({})
    }).toThrow('Unable to parse response');
    expect(() => {
      parser({ status: 'fail' })
    }).toThrow('Unable to parse response');
    expect(() => {
      parser({ status: 'success' })
    }).toThrow('Unable to parse response');
    expect(() => {
      parser({ status: 'success', message: {} })
    }).toThrow('Unable to parse response');
  });

});