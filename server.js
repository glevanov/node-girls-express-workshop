const express = require('express');
const formidable = require('express-formidable');
const mustacheExpress = require('mustache-express');
const router  = require('./router');

const app = express();
const port = process.env.PORT || 1066;

app.use(express.static('public'));
app.use(formidable());

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

router(app);

const server = app.listen(port, (err) => {
    if (err) { console.log(err) }
    console.log(`Server is listening on port ${server.address().port}`)
});
