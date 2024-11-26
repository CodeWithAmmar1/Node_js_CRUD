const express = require('express')
const app = express()
const port=3000

// enable the parsing of JSON request bodies
app.use(express.json());

// Import data from the external file
const posts = require('./data/posts');
const comments = require('./data/comments');
const albums = require('./data/albums');
const photos = require('./data/photos');
const todos = require('./data/todos');
const users = require('./data/users');

//posts
app.get('/posts', function (req, res) {
  res.send(posts)
});
//comments
app.get('/comments', function (req, res) {
  res.send(comments)
});
//albums
app.get('/albums', function (req, res) {
  res.send(albums)
});
//photos
app.get('/photos', function (req, res) {
  res.send(photos)
});
//photos
app.get('/todos', function (req, res) {
  res.send(todos)
});
//photos
app.get('/users', function (req, res) {
  res.send(users)
});


app.post('/post', (req, res) => {
  const newData = req.body;
  posts.push(newData);
  res.status(201).send({ status: true, message: "Created", data: posts });
});

app.put('/put', (req, res) => {
  res.status(201).send({status:true,message:"Data Added",data:req.query})
});

app.delete('/delete', (req, res) => {
  res.status(204).send({status:true,message:"Data Deleted ",data:req.query})
});

app.patch('/patch', (req, res) => {
  res.status(200).send({status:true,message:"User Data Added",data:req.query})
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


//commands
// npm i express
// npm i nodemon
// npm start