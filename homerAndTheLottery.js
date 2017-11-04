const buffer = `1
5
`

function main(input) {
    const inputLines = input.split("\n");
    const testCases = inputLines[0];

    inputLines.shift();

    for (let i = 0; i < testCases; i++) {
        const n = parseInt(inputLines[0]);
    
        let sum = 0

        for (let i = 1; i <= n; i++) {
            sum += Math.floor(n / i);
        }

        console.log(sum);
    }   
}

main(buffer);