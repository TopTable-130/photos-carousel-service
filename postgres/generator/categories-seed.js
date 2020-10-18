const db = require('../index.js');

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere', 'Menu', 'Dessert'];

const generateCategories () => {
  const data = [];
  for (var i = 0; i < categories.length; i++) {
    const category = {};
    category.id = i;
    category.id = categories[i];
    data.push(category);
  }
  return data;
};

const seedCategories () => {
  const data = generateCategories();
  db.Categories.insertMany(data, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully inserted Categories into PostgreSQL!');
    }
  })
};

module.exports = categories;
