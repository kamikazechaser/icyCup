const buffer = `3
3 3 1`

const _ = require("lodash");

function main(input) {
    
    function getHCF(numbers) {
        for (let i = 1; i < numbers.length; i++) {
            numbers[0] = twogcd(numbers[0], numbers[i]);
        }
        return numbers[0];
        function twogcd(first, second) {
            if (first < 0) first = -first;
            if (second < 0) second = -second;
            if (second > first) {
                let temp = first;
                first = second;
                second = temp;
            }
            while (true) {
                first %= second;
                if (first == 0) return second;
                second %= first;
                if (second == 0) return first;
            }
        }
    };

    const inputLines = input.split("\n");

    const sizeOfArmy = parseInt(inputLines[0]);
    const strengths = inputLines[1].split(" ");

    const arrays = [];

    for (let i = 1; i < strengths.length; i++) {
        const sizes = _.chunk(strengths, i);
        arrays.push(sizes);
    }

    const xA = _.flatten(arrays);

    let sum = 0;
    for (let i = 0; i < xA.length; i++) {
        const gcd = getHCF(xA[i]);

        if (gcd > 1) {
            sum += gcd * xA[i].length
        }
    }

    console.log(sum % 1000000007);
}

main(buffer);