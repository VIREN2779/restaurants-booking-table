
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const hostname = '127.0.0.1';
const port = 8080;

app.use(cors({
  origin: '*'
}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json('helloooooo');
})

const post_route_TableBook = require('./routes/postTableBook');
app.use('/api', post_route_TableBook);


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB!!');
    app.listen(port, () => {
      console.log(`conected to port http://${hostname}:${port}`);
    });
  })
  .catch((error) => {
    console.log('mongoose connect catch error', error);
  });