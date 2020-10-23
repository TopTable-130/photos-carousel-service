const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const writer2 = csvWriter();

const { restaurants } = require('../../data/restaurants');

const randomize = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
};

const cuisines =
  [ 'Afternoon Tea', 'American', 'Argentinean', 'Asian',
  'Barbecue', 'Bistro', 'Brazilian',
  'Caribbean', 'Chinese', 'Comfort Food', 'Continental', 'Cuban',
  'Dessert', 'European', 'French', 'Greek', 'Grill', 'Indian', 'Irish',
  'Japanese', 'Korean', 'Kosher', 'Lebanese',
  'Mediterranean', 'Mexican', 'Middle Eastern', 'Moroccan', 'Organic',
  'Persian', 'Peruvian', 'Seafood', 'Southeast Asian', 'Spanish', 'Steak',
  'Thai', 'Vegetarian', 'Vietnamese' ];

const generateRestaurants = () => {
  writer.pipe(fs.createWriteStream('postgres/csv/restaurants.csv'));
  for (var i = 0; i < 5000000; i++) {
    if (i % 500000 === 0) {
      console.log(`${i / 5000000 * 100}% done`)
    }
    writer.write({
      rest_name: restaurants[randomize(0, restaurants.length - 1)],
      cuisine: cuisines[randomize(0, cuisines.length - 1)],
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip_code: faker.address.zipCode(),
    });
  }
  writer.end();
  console.log('Loaded CSV with 5000000 restaurants!');
  // second instance of writer to handle second half of csv batch
  writer2.pipe(fs.createWriteStream('postgres/csv/restaurants2.csv'));
  for (var i = 0; i < 5000000; i++) {
    if (i % 500000 === 0) {
      console.log(`${i / 5000000 * 100}% done`)
    }
    writer2.write({
      rest_name: restaurants[randomize(0, restaurants.length - 1)],
      cuisine: cuisines[randomize(0, cuisines.length - 1)],
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip_code: faker.address.zipCode(),
    });
  }
  writer2.end();
  console.log('Loaded CSV with 10000000 restaurants!');
};

generateRestaurants();

// module.exports = generateRestaurants;
