const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        /* inside of an arrow function, the keyword, this is just going to refer to the scope that it was created in. So in this case, that means the keyword this refers to the window object */
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}

/* For fns inside Objects: 'this' refers to the object calling the function.
For fns not called by objects - Eg call back functions -    'this' refers to the global object.
For fns defined using arrow functions - 'this' simple refers to the object that is executing the arrow function - Irrespective of object's scope. Meaning:  if the arrow function is called from a global scope? 'this' will refer to the global object. If the arrow function is called with in a function which belongs to an object?'this' will refer to the calling function's scope and in this case the object itself. */