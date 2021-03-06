const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere', 'Menu', 'Dessert'];

//  ____ ____ ____ ____
// ||G |||G |||E |||Z ||
// ||__|||__|||__|||__||
// |/__\|/__\|/__\|/__\|

const generateCategories = () => {
  writer.pipe(fs.createWriteStream('postgres/csv/categories.csv'));
  for (var i = 1; i <= 7; i++) {
    if (i === 1) {
      console.log(` ____ ____ ____ ____ `);
    } else if (i === 2) {
      console.log(`||G |||G |||E |||Z ||`);
    } else if (i === 5) {
      console.log(`||__|||__|||__|||__||`);
    } else if (i === 7) {
      console.log(`|/__\\|/__\\|/__\\|/__\\|`);
    }
    writer.write({
      name: categories[i - 1],
    })
  }
  writer.end();
  console.log('Loaded CSV with categories!');
};

generateCategories();

// module.exports = generateCategories;
