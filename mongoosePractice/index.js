const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

/* The way that Mongoose is set up is that it does something called operation buffering,
which allows us to start using the models we define immediately without having to wait for mongoose
to be connected.
So we don't need to nest all of our code in .then() */


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
.then(data => {
    console.log("IT WORKED!")
    console.log(data);
})
// dont need to use .save with insert many


// for finding we can use Movie.find({}) which returns a query object which has tons of attributes but since it's a thennable obect we use Movie.fin({}).then(data => console.log(data)) to show all the data

// updating is similar to mongoose, we get the no of items update succesfully and not the value they were updated to
// to get the new value of the item you can use findOneAndUpdate or findByIdAndUpdate which return a thenable object. 
// However by default it return the old value to get the new value you need to use {new: true} as an option