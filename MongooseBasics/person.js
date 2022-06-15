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

/* ******************
mongoose gives us the ability to run code before and after certain things are executed.
So I can run some code right before something is removed or something is saved or any time we call
update many or find or whatever it is.
You can see a whole list of the things that we can work with and we can run a pre or post hook or a middleware*/

personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})
personSchema.post('save', async function () {
    console.log("JUST SAVED!!!!")
})


const Person = mongoose.model('Person', personSchema);


