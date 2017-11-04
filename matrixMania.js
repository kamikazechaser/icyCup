const buffer = `2 2
1 3
4 2
2 5
3 1`

const _ = require("lodash");

function main(input) {
    const inputLines = input.split("\n");

    const firstLine = inputLines[0].split(" ");
    const rows = parseInt(firstLine[0]);
    const columns = parseInt(firstLine[1]);

    inputLines.shift();

    const flatArray = [];

    for (let i = 0; i < inputLines.length; i++) {
        flatArray.push(inputLines[i].split(" "));
    }

    const t = _.chunk(_.flatten(flatArray), rows * columns);



    for (let j = 0; j < rows * columns; j++) {
        if (t[0][j] > t[1][j]) {
            const bigValue = t[0][j];
            const smallValue = t[1][j];

            t[1][j] = bigValue;
            t[0][j] = smallValue;
        }
    }

    const tempArray = _.chunk(t, columns * rows)



    let sumA = 0;
    let sumB = 0;
    

    for (let k = 0; k < rows * columns; k++) {
        sumA += parseInt(tempArray[0][0][k]);
        sumB += parseInt(tempArray[0][1][k]);
    }

    console.log(Math.abs(sumA - sumB))
}

main(buffer);