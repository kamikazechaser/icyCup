const buffer = `2
14 2046 947
25 1953 676
`

function main(input) {
    const inputLines = input.split("\n");
    const testCases = inputLines[0];

    inputLines.shift();

    for (let i = 0; i < testCases; i++) {
        const classRegister = [];

        const testCaseData = inputLines[i].split(" ");
        
        let departmentCode;

        if (parseInt(testCaseData[0]) < 10) {
            departmentCode = `10${testCaseData[0]}`;
        } else {
            departmentCode = `1${testCaseData[0]}`;
        }

        
        const yearOfAdmission = testCaseData[1].slice(-2);
        const classStrength = testCaseData[2];

        console.log(departmentCode);

        for (let j = 1; j <= parseInt(classStrength); j++) {

            if (j <= 9) {
                classRegister.push(`${departmentCode}1${yearOfAdmission}00${j}`);
            }             

            else if (j >= 10 && j <= 99) {
                classRegister.push(`${departmentCode}1${yearOfAdmission}0${j}`);
            }

            else {
            classRegister.push(`${departmentCode}1${yearOfAdmission}${j}`);
            }

        }

        let count = 0;

        for (let k = 0; k < classRegister.length; k++) {
            const rollNumber = classRegister[k];

            const testSum = add(rollNumber);
            
            if (parseInt(rollNumber) % testSum === 0) {
                count++;
            }
        }

        console.log(count);
    }

    function add(input) {
        const string = input.split("");

        let sum = 0;

        for (let i = 0; i < string.length; i++) {
            sum += parseInt(string[i]);
        }

        return sum;
    }    
}

main(buffer);