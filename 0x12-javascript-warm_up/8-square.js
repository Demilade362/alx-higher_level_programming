#!/usr/bin/node

const square = parseInt(process.argv[2]);

if (!parseInt(square)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < square; i++) {
        let y = 0;
        let myVar = '';

        while (y < square) {
            myVar = myVar + 'X';
            y++;
        }
        console.log(myVar);
    }
}