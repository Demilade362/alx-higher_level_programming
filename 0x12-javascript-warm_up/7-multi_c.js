#!/usr/bin/node

const x = parseInt(process.argv[2]);

if (!parseInt(x)) {
    console.log("Missing number of occurrences");
} else {
    for (let index = 0; index < x; index++) {
        console.log("C is fun");
    }
}

