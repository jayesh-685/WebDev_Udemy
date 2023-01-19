// EJS is a simple templating language that lets you embed Javascript into HTML templates. IE, build dynamic content into your templates. It is faster and simpler than using a full framework like Angular or React, although less feature rich.

const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// by default, when we create a new express app and we're using some
// view, Engine Express is going to assume that our views are templates exist in a directory called views.

// all the static files (css, scripts, media should be in the public folder)
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
// __dirname refers to where index.js is located
app.set('views', path.join(__dirname, '/views'))
// the default views directory that Express is looking for is only going to work if I am running my application from within the same directory where my views folder is.
// it uses process.cwd() and then appends /views to it to find views directory which doens't always work.
// we want where my file index.js is  located and then append views to that
// to achieve that we use const path and app.set('views', path.join())

// instead of sending some text we are sending a ejs file
app.get('/', (req, res) => {
    res.render('home')
})
// dont need to write home.ejs because when we set view engine to ejs it assumes we are going to use ejs files

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})