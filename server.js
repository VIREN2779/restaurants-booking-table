
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
hostname = '127.0.0.1';
const port = process.env.port || 8080;

require('dotenv').config();

app.use(cors({
  origin: '*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json('helloooooo');
})

const post_route_TableBook = require('./routes/postTableBook');
app.use('/api', post_route_TableBook);




// mongoDB is working but don't live the backend, so we only store data of table booking to direct on telegram-bot :-
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB!!');
    app.listen(port, () => {
      console.log(`conected to port http://${hostname}:${port}`);
    });
  })
  .catch((error) => {
    console.log('mongoose connect catch error', error);
  });