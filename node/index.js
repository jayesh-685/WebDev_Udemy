import {franc} from 'franc'
import langs from 'langs'

const input = process.argv[2];
const code = franc(input);
if (code === 'und') {
    console.log("Unable to identify language");
} else {
    console.log(langs.where("3", code));
}

