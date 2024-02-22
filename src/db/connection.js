const monk = require('monk');

// const dbUrl = process.env.DB_URL;
const dbUrl = 'mongodb://zbjfei:fn9n@isit.my.to:27017/?authSource=WangzihuDB';

// console.log(process.env.NODE_ENV);

const db = monk(dbUrl);

db.then(() => {
  console.log('Connected correctly to server');
});

module.exports = db;
