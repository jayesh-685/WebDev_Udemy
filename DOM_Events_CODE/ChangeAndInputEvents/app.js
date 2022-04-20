const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })
// this triggers when focus changes that is when we click out of the text box after changing it

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})