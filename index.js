/*
const express = require('express')
const app = express()
// set up brouther address row router

app.get('/', (req, res) => {
    // create html response
    res.send('<a href="/contact">Conctact Us</a> <br> <a href="/about">About Us</a>');
});
/*
app.get('/contact', (req, res) => {
    res.send('<h1>Conctact Us Page</h1>');
})
*/
/*
app.get('/about', (req, res) => {
    res.send('<h1>About Us Page</h1>');
})

app.get('*', (req, res) => {
    res.send('404. This page does not exist. <a href="/">Go to Homepage</a>')
})
//listen app via port
app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`)
})
*/

const express = require('express');
const app = express();
// add public dir
app.use(express.static('public'));

app.get('/user/:username', (req, res)=> {
    //get parameter data from addressrow
    let user = req.params.username;
    //use this data in template
    res.render('index.ejs',{username: user});
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});