let command = prompt("What would you like to do?");
const list = [];

while (command !== "quit" && command !== "q") {
    if (command === "new") {
        let task = prompt("Enter new todo");
        list.push(task);
        console.log(`"${task}" inserted!`);
    } else if (command === "list") {
        for (let i=0; i<list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
    } else if (command === "delete") {
        index = parseInt(prompt("Enter index"));
        if (index < 0 || index >= list.length || Number.isNaN(index)) {
            console.log("Invalid index");
        } else {
            let temp = list[index];
            list.splice(index, 1);
            console.log(`${temp} deleted!`);
        }
    }
    command = prompt("What would you like to do?");
}