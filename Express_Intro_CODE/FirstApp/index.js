// This download does not include the node_modules folder
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
const express = require("express");
const app = express();

// we can only send one response per request so commenting this out because it matches all the requests
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })

// req and res stand for request and response respecitvely and they are objects automatically created by express
// app.get for get requests, app.post for post requests
app.get('/', (req, res) => {
    res.send('Welcome to the this world!')
})

// will match r/subreddit and also anything that matches that pattern
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

// for all other requests
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})




// /cats => 'meow'
// /dogs => 'woof'
// '/' 


// this will run when the app has started listening
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})
