const buffer = "XCBXVCXSX";

function main(input) {
    const stringArray = input.split("");
    const chunkedArray = [];

    while (stringArray.length > 0) {
        chunkedArray.push(stringArray.splice(0, 4));
    }

    const searchMap = {};
          searchMap.column_size = chunkedArray.length

    for (let i = 0; i < chunkedArray.length; i++) {
        for (let j = 0; j < chunkedArray[i].length; j++) {
            switch (chunkedArray[i][j]) {
                case "B":
                    searchMap.b = j;
                    break;
                case "C":
                    searchMap.c = j;
                    break;
                case "S":
                    searchMap.s = j;
                    break;
                case "V":
                    searchMap.v = j;
                    break;                                                            
                default:
                    break;
            }
        }
    }

    function replaceCharacter(searchMap) {
        const duplicateStringArray = input.split("");


        for (let i = 0; i < searchMap.column_size; i++) {
            duplicateStringArray[(i * 4) + parseInt(searchMap.b)] = "B";
            duplicateStringArray[(i * 4) + parseInt(searchMap.c)] = "C";
            duplicateStringArray[(i * 4) + parseInt(searchMap.s)] = "S";
            duplicateStringArray[(i * 4) + parseInt(searchMap.v)] = "V";
        }

        const mainString = duplicateStringArray.join("");
        return mainString.substring(0, input.length);
    }

    const result = replaceCharacter(searchMap);

    console.log(result);    
}

main(buffer);