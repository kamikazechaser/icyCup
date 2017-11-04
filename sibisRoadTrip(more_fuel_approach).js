const buffer = `5 10
1 2 2 1 2 2 2 2 1 1`

const _ = require("lodash");

function main(input) {
    const inputLines = input.split("\n");
    const firstLine = inputLines[0].split(" ");

    const initialFuel = parseInt(firstLine[0]);
    const totalDistance = parseInt(firstLine[1]);

    const fuelBunks = inputLines[1].split(" ");
    const fuelHashMap = [];

    for (let y = 0; y < fuelBunks.length; y++) {
        fuelHashMap.push({position: y, amount: fuelBunks[y]});
    }

    const optimumStation = _.chain(fuelHashMap).sortBy("position").sortBy("amount").value()

    let fuelCounter = initialFuel;
    let stopCounter = 0;
    let distanceCounter = totalDistance;
    let position = 0;

    console.log(optimumStation)

    for (let i = optimumStation.length -1; i >= 0; i--){
        if (fuelCounter >= distanceCounter) {
            break;
        }

        if ((optimumStation[i].position + 1) <= fuelCounter) {
            console.log(optimumStation[i])
            distanceCounter -= optimumStation[i].position + 1;
            fuelCounter -= optimumStation[i].position + 1;
            fuelCounter += parseInt(optimumStation[i].amount); 
            stopCounter++
            position = parseInt(optimumStation[i].position);
        }
    };

    console.log(stopCounter)
}

main(buffer);