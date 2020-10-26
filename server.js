const express = require('express');
const app = express();
const addBodyParser = require('./middlewares/bodyParser');
const addCors = require('./middlewares/cors');
const addNotValidUrlsHandler = require('./middlewares/notValidUrls');
const dogRoutes = require('./api/routes/dogRoutes');

// Middlewares
addBodyParser(app);
addCors(app);
addNotValidUrlsHandler(app);

// Endpoints
app.get('/ping', (req, res) => {
  return res
    .status(200)
    .send({ status: 'Hello World!'})
});
app.use('/dogs', dogRoutes);

// Server config
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`);
  console.log('Press CTL+C to quit.');
});
