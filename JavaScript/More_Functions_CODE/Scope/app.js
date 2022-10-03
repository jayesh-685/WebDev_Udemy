// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch()

// ==============
// BLOCK SCOPE
// ==============
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }
// console.log(radius);
// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     let msg = "ASKLDJAKLSJD";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

// ==============
// LEXICAL SCOPE
// ==============

/* *************************
an inner function nested inside of some parent function has access to the scope or to the variables defined in the scope of that outer function.
when bankRobbery is executed then it calls cryForHelp which calls inner but even inside inner we have access to heroes array are able to print that but we don't have access to color outside of cryForHelp
*/

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }   
        }
        inner();
    }
    cryForHelp();
}