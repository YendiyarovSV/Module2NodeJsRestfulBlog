const express = require('express')
const app = express()


const bodyParser = require('body-parser')
const morgan = require('morgan')
var routesObject = require('./routes');

let store = {
  posts: [{
    name: 'BlogName',
    url: 'https://blogname.com',
    text: 'This is test blog text.',
    comments: [
      {
         author:"John",
         text: "Hello world!"
      }
    ]
  }]
};

let blogData = store.posts;

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req,res,next) => {
  req.blogData = blogData;
  next()
});

app.use('/',routesObject)

app.listen(3000)

module.exports = app;
