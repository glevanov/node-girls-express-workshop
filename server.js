const express = require('express');
const formidable = require('express-formidable');

const app = express();
const port = process.env.PORT || 1066;

app.use(formidable());

app.listen(port, () => {
   console.log(`Server is listening on port ${port}. Ready to accept requests!`)
});

app.post('/create-post', (req, res) => {
   console.log(req.fields);
});

app.use(express.static('public'));
