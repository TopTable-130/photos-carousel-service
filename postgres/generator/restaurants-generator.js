const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const { restaurants } = require('../data/restaurants');

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

// o-o   o-o  o--o o---o
// o     o     |       /
// |  -o |  -o O-o   -O-
// o   | o   | |     /
// o-o   o-o  o--o o---o

const generateRestaurants () => {
  writer.pipe(fs.createWriteStream('restaurants.csv'));
  for (var i = 1; i <= 10000; i++) {
    i === 1000
      ? console.log('o-o   o-o  o--o o---o ')
        : i === 2000
        ? console.log('o     o     |       /')
          : i === 5000
          ? console.log('|  -o |  -o O-o   -O-
          ')
            : i === 8000
            ? console.log('o   | o   | |     /
            ')
              : i === 10000
              ? console.log('o-o   o-o  o--o o---o
              ')
    writer.write({
      id: i,
      rest_name: restaurants[randomize(0, restaurants.length - 1)];
      cuisine: cuisines[randomize(0, cuisines.length - 1)];
      address: faker.address();
    })
  }
  writer.end();
  console.log('Seeded 10000 restaurants!');
};

generateRestaurants();
