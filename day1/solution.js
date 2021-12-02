// Thank you for the help on this importing code to Liam
const fs = require("fs");
let inputData = fs.readFileSync("./data.txt", "utf-8").split("\n");

function analyze(data) {
    let count = 0;
    let prev = data[0];

    for (let i = 1; i < data.length; i++) {
        current = data[i];
        if (parseInt(prev) - parseInt(current) < 0) {
            count += 1;
        }
        prev = current;
    }
    return count;
}

// console.log(analyze(inputData));


function analyze2(data) {
    let count = 0;
    let prev = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
    console.log(prev)

    for (let i = 1; i < data.length - 2; i++) {
        current = parseInt(data[i]) + parseInt(data[i + 1]) + parseInt(data[i + 2]);
        if (prev - current < 0) {
            count += 1;
        }
        prev = current;
    }
    console.log(current);
    return count;
    
}

console.log(analyze2(inputData));