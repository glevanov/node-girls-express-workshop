const express = require('express');

const app = express();
const port = process.env.PORT || 1066;

app.listen(port, () => {
   console.log(`Server is listening on port ${port}. Ready to accept requests!`)
});

app.get('/', (req, res) => {
   res.send('Request recieved.')
});

app.get('/node', (req, res) => {
   res.send('Yep, its Node.')
});

app.get('/girls', (req, res) => {
   res.send('💅🌸✨');
});

app.get('/chocolate', (req, res) => {
   res.send('Mm chocolate 🍫😋');
});
