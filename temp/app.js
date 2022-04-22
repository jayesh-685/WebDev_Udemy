const h1 = document.querySelector('h1');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');
const total = document.querySelector('#totalP');
let totalPoints = document.getElementById('totalP').value;
console.log(totalPoints)
let points1 = 0;
let points2 = 0;

p1.addEventListener('click', function () {
    points1 += 1;
    console.log(points1)
    console.log(totalPoints)
    if (points1 === totalPoints) {
        console.log('Player 1 won!');
    }
    h1.innerText = `${points1} to ${points2}`;
})

p2.addEventListener('click', function () {
    points2 += 1;
    h1.innerText = `${points1} to ${points2}`;
})

reset.addEventListener('click', function () {
    points1 = points2 = 0;
    h1.innerText = `${points1} to ${points2}`;
})
