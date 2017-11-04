const buffer = `1
3
1 0 1
`

function main(input) {
    const inputLines = input.split("\n");
    const testCases = inputLines[0];

    inputLines.shift();

    for (let i = 0; i < testCases; i++) {
        inputLines.shift();
        
        const townArray = inputLines[i].split(" ");
        const indexPoints = [];
        const distancesArray = [];

        for (let j = 0; j < townArray.length; j++) {
            if (parseInt(townArray[j]) === 1) {
                indexPoints.push(j);
            }
        }

        for (let k = 1; k < indexPoints.length; k++) {
            const distanceDifference = indexPoints[k] - indexPoints[k- 1];

            if (distanceDifference !== 0) {
                distancesArray.push(distanceDifference);
            }
        }

        const closestHome = distancesArray.sort();
        
        console.log(closestHome[0]);
    }   
}

main(buffer);