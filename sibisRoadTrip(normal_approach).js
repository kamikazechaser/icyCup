const buffer = `5 10
1 2 2 1 2 2 2 2 1 1 
`

function main(input) {
const inputLines = input.split("\n");

    const firstLine = inputLines[0].split(" ");
    const currentFuel = firstLine[0];
    const fuelPoints = firstLine[1];
    const totalDistance = parseInt(fuelPoints) + 1;
    const fuelPumps = inputLines[1].split(" ");

    let ticker = parseInt(currentFuel);
    let stops = 0;

    for (let i = 0; i < totalDistance; i++) {
        const distanceCovered = i + 1;

        if (ticker >= (totalDistance - distanceCovered)) {
            break;
        }        

        ticker--;

        if (ticker <= 2) {
            ticker = ticker + parseInt(fuelPumps[i]);
            stops++;
        }
    }

    console.log(stops);
}

main(buffer);