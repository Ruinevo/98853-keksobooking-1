'use strict';

const {
  getRandomFromArr,
  getRandomFromRange,
  getRandomSample,
  mixArr,
  getRandomHash,
  getDateInInterval
} = require(`../utils.js`);

const generatorOptions = require(`../data/generator-options.js`);

const AVATAR_URL_BASE = `https://robohash.org`;
const LENGTH_OF_URL_HASH = 7;


const avatarUrl = `${AVATAR_URL_BASE}/${getRandomHash(LENGTH_OF_URL_HASH)}`;

const location = {
  'x': getRandomFromRange(generatorOptions.MIN_X, generatorOptions.MAX_X),
  'y': getRandomFromRange(generatorOptions.MIN_Y, generatorOptions.MAX_Y)
};


const generateEntity = () => {
  return {
    author: {
      avatar: avatarUrl
    },
    offer: {
      title: getRandomFromArr(generatorOptions.TITLES),
      address: `${location.x}, ${location.y}`,
      price: getRandomFromRange(generatorOptions.MIN_PRICE, generatorOptions.MAX_PRICE),
      type: getRandomFromArr(generatorOptions.TYPES),
      rooms: getRandomFromRange(generatorOptions.MIN_ROOMS_COUNT, generatorOptions.MAX_ROOMS_COUNT),
      guests: getRandomFromRange(generatorOptions.MIN_ROOMS_COUNT, generatorOptions.MAX_ROOMS_COUNT),
      checkin: getRandomFromArr(generatorOptions.CHECKINS),
      checkout: getRandomFromArr(generatorOptions.CHECKOUTS),
      features: getRandomSample(generatorOptions.FEATURES),
      description: ``,
      photos: mixArr(generatorOptions.PHOTOS)
    },
    location: {
      x: location.x,
      y: location.y
    },
    date: getDateInInterval(generatorOptions.TIME_INTERVAL_LENGTH)
  };
};

module.exports = {
  generateEntity
};