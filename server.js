const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/shabits', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/setup.ejs', (req, res) => {
    res.render('setup')
});

app.get('/confirmation.ejs', (req, res) => {
    res.render('confirmation')
});

app.get('/tracker.ejs', (req, res) => {
    res.render('tracker')
});



app.listen(port, () => console.log(`app listening on at http://localhost:${port}`));