const { Console } = require("console");
const fs = require("fs");
let inputData = fs.readFileSync("./data.txt", "utf-8").split("\n");

// find value of word and use if statement to evaluate
// within if find value

function submarine (directions) {
    let horizontal = 0;
    let depth = 0;
    console.log(directions[0]);
    console.log(directions[0].indexOf(' ') + 1)

    for (let i = 0; i < directions.length; i++) {
        let string = directions[i];
        if (string.includes("forward")) {
            let index = directions[i].indexOf(' ') + 1;
            horizontal += parseInt(directions[i].charAt(index));
        } else if (string.includes("up")) {
            let index = directions[i].indexOf(' ') + 1;
            depth -= parseInt(directions[i].charAt(index));
        } else {
            let index = directions[i].indexOf(' ') + 1;
            depth += parseInt(directions[i].charAt(index));
        }
    }
    let output = horizontal * depth;
    return output;
}

// console.log(submarine(inputData));



function submarine2 (directions) {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    console.log(directions[0]);
    console.log(directions[0].indexOf(' ') + 1)

    for (let i = 0; i < directions.length; i++) {
        let string = directions[i];
        if (string.includes("forward")) {
            let index = directions[i].indexOf(' ') + 1;
            horizontal += parseInt(directions[i].charAt(index));
            depth += (parseInt(directions[i].charAt(index)) * aim);
        } else if (string.includes("up")) {
            let index = directions[i].indexOf(' ') + 1;
            // depth -= parseInt(directions[i].charAt(index));
            aim -= parseInt(directions[i].charAt(index));
        } else {
            let index = directions[i].indexOf(' ') + 1;
            // depth += parseInt(directions[i].charAt(index));
            aim += parseInt(directions[i].charAt(index));
        }
    }
    let output = horizontal * depth;
    return output;
}

console.log(submarine2(inputData));