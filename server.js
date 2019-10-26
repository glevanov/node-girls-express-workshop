const express = require('express');
const formidable = require('express-formidable');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 1066;

app.use(formidable());

app.listen(port, () => {
   console.log(`Server is listening on port ${port}. Ready to accept requests!`)
});

app.post('/create-post', (req, res) => {
   const postsPath = __dirname + '/data/posts.json';
   fs.readFile(postsPath, 'utf-8', (err, file) => {
      if (err) { console.log(err) }
      const posts = JSON.parse(file);
      posts[new Date().valueOf()] = req.fields.blogpost;

      fs.writeFile(postsPath, JSON.stringify(posts), 'utf-8', (err) => {
         if (err) { console.log(err) }
      })
   });
});

app.use(express.static('public'));
