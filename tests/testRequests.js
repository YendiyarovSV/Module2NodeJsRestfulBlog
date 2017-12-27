const request = require('supertest');
var app = require('../server.js');

//add test data
const testObjectsCount = 5;
for (var i = 0; i <= testObjectsCount - 1; i++) {
  request(app)
    .post('/posts')
    .send({
      name: 'testPostItem_' + i,
      url: 'https://testPostItem.com_' + i,
      text: 'testPostItem Text.',
      comments: [{
        author: "Andrew_" + i,
        text: "Hello world!_" + i
      }]
    })
    .expect(201)
    .end(function(err, res) {
      if (err) throw err;
    });
}


//success get
request(app)
  .get('/posts')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

//success post
request(app)
  .post('/posts')
  .send({
    name: 'testPostItem',
    url: 'https://testPostItem.com',
    text: 'testPostItem Text.',
    comments: [{
      author: "Andrew",
      text: "Hello world!"
    }]
  })
  .expect(201)
  .end(function(err, res) {
    if (err) throw err;
  });

//success put
request(app)
  .put('/posts/0')
  .send({
    name: 'testPostItem',
    url: 'https://testPostItem.com',
    text: 'testPostItem Text.',
    comments: [{
      author: "Andrew",
      text: "Hello world!"
    }]
  })
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

//not found put
request(app)
  .put('/posts/20')
  .send({
    name: 'testPostItem',
    url: 'https://testPostItem.com',
    text: 'testPostItem Text.',
    comments: [{
      author: "Andrew",
      text: "Hello world!"
    }]
  })
  .expect(404)
  .end(function(err, res) {
    if (err) throw err;
  });


//bad request post (name is missing)
request(app)
  .post('/posts')
  .send({
    url: 'https://testPostItem.com',
    text: 'testPostItem Text.',
    comments: [{
      author: "Andrew",
      text: "Hello world!"
    }]
  })
  .expect(400)
  .end(function(err, res) {
    if (err) throw err;
  });

//success remove post
request(app)
  .delete('/posts/0')
  .expect(204)
  .end(function(err, res) {
    if (err) throw err;
  });

//not found remove post
request(app)
  .delete('/posts/30')
  .expect(404)
  .end(function(err, res) {
    if (err) throw err;
  });


//success get
request(app)
  .get('/posts/0/comments')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

//success post a comment
request(app)
  .post('/posts/0/comments')
  .send({
    author: "testAuthor",
    text: "Hello test world!"
  })
  .expect(201)
  .end(function(err, res) {
    if (err) throw err;
  });

//bad request post a comment
request(app)
  .post('/posts/0/comments')
  .send({
    author: "",
    text: "Hello test world!"
  })
  .expect(400)
  .end(function(err, res) {
    if (err) throw err;
  });

//success put a comment
request(app)
  .put('/posts/1/comments/0')
  .send({
    author: "testAuthorNew",
    text: "Hello test world!"
  })
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

//not found put a comment
request(app)
  .put('/posts/0/comments/30')
  .send({
    author: "testAuthorNew",
    text: "Hello test world!"
  })
  .expect(404)
  .end(function(err, res) {
    if (err) throw err;
  });

//success remove comment
request(app)
  .delete('/posts/0/comments/0')
  .expect(204)
  .end(function(err, res) {
    if (err) throw err;
  });

//not found remove comment
request(app)
  .delete('/posts/0/comments/30')
  .expect(404)
  .end(function(err, res) {
    if (err) throw err;
  });
