const express = require('express');
const post_route_TableBook = express.Router();
const bodyParser = require('body-parser');

post_route_TableBook.use(bodyParser.json());
post_route_TableBook.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');

post_route_TableBook.use(express.static('public'));




const postController = require('../controllers/tableBookController');

// --------------------------------------------POST--------------------------------------------------------
post_route_TableBook.post(
  '/create-post',
  postController.createPost
);
// --------------------------------------OR(for checking purpose)------------------------|
// post_route_TableBook.post('/create-post' , function(req,res){                               |
// res.send('hi from post side');                                                        |
// });                                                                                   |
// --------------------------------------------------------------------------------------|

// --------------------------------------------GET all Data------------------------------------------------
post_route_TableBook.get('/get-posts', postController.getPosts);

// --------------------------------------------DELETE-----------------------------------------------------
post_route_TableBook.delete('/delete-post/:id', postController.deletePost);

// --------------------------------------------UPDATE-----------------------------------------------------
post_route_TableBook.post(
  '/update-post',
  postController.updatePost
);
module.exports = post_route_TableBook;
