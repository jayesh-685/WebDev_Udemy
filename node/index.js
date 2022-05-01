import {franc, francAll} from 'franc'
// const langs = require('langs');
import {langs} from 'langs'

const input = process.argv[2];
if (franc(input) === 'und') {
    console.log("Unable to identify language");
} else {
    console.log(langs.where("3", franc(input)));
}
