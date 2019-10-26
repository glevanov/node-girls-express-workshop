const express = require('express');
const formidable = require('express-formidable');
const router  = require('./router');

const app = express();
const port = process.env.PORT || 1066;

app.use(express.static('public'));
app.use(formidable());

router(app);

const server = app.listen(port, (err) => {
    if (err) { console.log(err) }
    console.log(`Server is listening on port ${server.address().port}`)
});
