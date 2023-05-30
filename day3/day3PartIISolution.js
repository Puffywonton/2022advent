import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const main = () => {
    const fileStream = createReadStream('./day3/day3Input.txt');
    let dataArray = []
    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        dataArray.push(line)
    });

    rl.on('close', () => {
        commonLetterFinder(dataArray)
    });
}
const commonLetterFinder = (array) => {
    let size = 3
    let total = 0
    while (array.length > 0) {
        let groupOfThree = array.splice(0, size)
        let firstCompa = comparator(groupOfThree[0], groupOfThree[1])
        let finalCompa = comparator(firstCompa, groupOfThree[2])
        let badgeNumber = letterToNumber(finalCompa[0])
        total = total + badgeNumber
    }
    console.log("final", total)
} 
const comparator = (first, second) => {
    const arr1 = Array.from(first);
    const arr2 = Array.from(second);
    const result = arr1.filter(value => arr2.includes(value))
    let uniqueResult = [...new Set(result)];
    return uniqueResult
}
const letterToNumber = (letter) => {
    if (letter == letter.toUpperCase()) {
        return parseInt(letter, 36)+17
    }
    if (letter == letter.toLowerCase()) {
        return parseInt(letter, 36)-9
    }
}
main()

