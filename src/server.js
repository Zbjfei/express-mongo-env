const app = require('./app');
// http://127.0.0.1:8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}/n ${process.env.DB_URL}`);
});
