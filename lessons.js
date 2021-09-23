"use strict";

function firts(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}


function done() {
    console.log("Я прошел этот урок!");
}

firts("JS", done);
    

let options = {
    name: "Ivan",
    width: 280,
    height: 450,
    color: {
        border: "solid",
        bg: "red"
    },
    makeTest: function() {
        console.log("test");
    }
};

const {border, bg} = options.color;
console.log(bg);

//console.log(Object.keys(options).length);

//options.makeTest();

//console.log(object);
//delete(object.name);
//console.log(object);
/*let counter = 0;
for (let key in options) {
    if (typeof(options[key]) ==="object") {
        for (const i in options[key]) {
            console.log(`Cвойство ${i} имеет значение ${options[key][i]}`);
            counter++;
            }
        }
    else {
        console.log(`Cвойство ${key} имеет значение ${options[key]}`);
        counter++;
    }    
    
    
}
console.log(counter);*/


