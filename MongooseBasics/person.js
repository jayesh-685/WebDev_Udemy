/* ******
They give us the ability to add properties to a schema that don't actually exist in the database itself, but that we have access to, thanks to Mongoose. */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

/* ************
now you can also do something a little bit fancier, which is to define
the set version of our virtual 
But what this will do is actually take the property, the value we're setting for fullName, and then
we can use that to update first name and last name. */

personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})
personSchema.post('save', async function () {
    console.log("JUST SAVED!!!!")
})


const Person = mongoose.model('Person', personSchema);


