const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, './data/posts.json');

const router = app => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.post('/create-post', (req, res) => {
        const postsPath = __dirname + '/data/posts.json';
        fs.readFile(postsPath, 'utf-8', (err, file) => {
            if (err) { console.log(err) }
            const posts = JSON.parse(file);
            posts[Date.now()] = req.fields.blogpost;

            fs.writeFile(postsPath, JSON.stringify(posts), 'utf-8', (err) => {
                if (err) { console.log(err) }
            })
        });
    });

    app.get('/get-posts', (req, res) => {
        res.sendFile(postsPath);
    });

    app.get('/posts/:postId', function (req, res) {
        res.send('post id: ' + req.params.postId);
    });
};

module.exports = router;
