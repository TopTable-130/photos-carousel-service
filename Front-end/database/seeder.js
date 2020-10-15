const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');


const myWordList = [
  'Tristan Lobster Tails', 'Seared Pork Belly', 'Ahi Tuna Tartare',
  'Delmonico Steak', 'Baby Lobster', 'Bombay Sapphire Martini',
  'Fresh Diver Scallops', 'Carrot Cake', 'Prime Beef Sliders',
  'Alaskan King Crab Legs', 'Cajun Ribeye', 'Iceberg Wedge Salad', 'Key Lime Pie', 'Grouper Sandwich',
  'Creme Brulee', 'Brussel sprouts', 'Fresh Shucked Corn', 'Prime Rib Philly Cheesesteak',
  'Stone Crab Claws', 'Carpaccio di Bresaola', 'Lamb Chop Casserole',
];

const restaurantNames = [
  'Grill', 'Bar', 'Steakhouse',
  'Villa', 'Seafood', 'Pizza',
];

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomPhotoUrl = () => {
  const bucketUrl = 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/';
  const photoEndpoint = getRandomIntInclusive(1, 40).toString();
  return `${bucketUrl}${photoEndpoint}.png`;
};

const getRandomAvatarUrl = () => {
  const bucketUrl = 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/Avatar_Images/';
  const photoEndpoint = getRandomIntInclusive(0, 12).toString();
  return `${bucketUrl}${photoEndpoint}.png`;
};

const generatePhotosArray = () => {
  const result = [];
  const length = 41;
  for (let i = 1; i < length; i += 1) {
    const photosObj = {};
    photosObj.photo_id = i;
    photosObj.description = faker.random.arrayElement(myWordList);
    photosObj.date = faker.date.past();
    photosObj.category = faker.random.arrayElement(categories);
    photosObj.user_id = faker.random.number();
    photosObj.user_avatar_path = getRandomAvatarUrl();
    const randomUrlPath = getRandomPhotoUrl();
    if (photosObj[randomUrlPath] === undefined) {
      photosObj.url_path = randomUrlPath;
    }
    result.push(photosObj);
  }
  return result;
};

const generateSeedData = () => {
  const seedData = [];
  for (let i = 1; i <= 100; i += 1) {
    const restaurant = {};
    restaurant.id = i;
    restaurant.name = `${faker.name.firstName()}'s ${faker.random.arrayElement(restaurantNames)}`;
    restaurant.photos = generatePhotosArray();
    seedData.push(restaurant);
  }
  return seedData;
};

// eslint-disable-next-line no-unused-vars
const seedData = () => {
  const dataArray = generateSeedData();
  db.RestaurantModel.insertMany(dataArray, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully inserted Restaurants into MongoDB');
      // isSeeded = true;
    }
  });
};
seedData();