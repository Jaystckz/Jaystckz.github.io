var cars = ["fiat", "benz", "honda", "toyota"]



for(let i = 0; i < cars.length; i++) {
    if(cars[i] == "benz") {
        console.log("you're driving a sweet " + cars[i])
    }
}

var cars = ["fiat", "benz", "honda", "toyota"];

for (let i = 0; i < cars.length; i++) {
    if (cars[i] == "benz" || cars[i] == "fiat") {
        console.log("you're driving a sweet " + cars[i]);
    }
}

var cars = ["fiat", "benz", "honda", "toyota"];
var messageParts = [];

for (let i = 0; i < cars.length; i++) {
    if (cars[i] == "benz" || cars[i] == "fiat") {
        messageParts.push(cars[i]);
    }
}

if (messageParts.length > 0) {
    console.log("you're driving a sweet " + messageParts.join(' and '));
}




