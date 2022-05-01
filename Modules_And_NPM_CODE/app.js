const { PI, square } = require('./math');

const cats = require('./shelter')
// When require is given the path of a folder, it'll look for an index.js file in that folder; if there is one, it uses that, and if there isn't, it fails.
// console.log(PI)

// console.log(square(9))
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)
