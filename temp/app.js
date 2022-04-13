const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');

hello.addEventListner('click', function () {
    console.log("hello");
});

function sayHello () {
    console.log("hello");
}
goodbye.addEventListner('click', sayHello);
