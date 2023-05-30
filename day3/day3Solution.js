import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const main = () => {
    const fileStream = createReadStream('./day3/day3Input.txt');
    var total = 0
    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        total = total + sorter(line)
    });

    rl.on('close', () => {
        console.log(total)
    });
}

const sorter = (line) => {
    let halfLength = line.length / 2
    let firstHalf = line.slice(0, halfLength).split('')
    let secondHalf = line.slice(halfLength).split('')
    return(comparator(firstHalf, secondHalf)) 
}


const comparator = (firstHalf, secondHalf) => {
    let result = 0;
    firstHalf.every(firstHalfLetter => {
        if (secondHalf.includes(firstHalfLetter)) {
            result = letterToNumber(firstHalfLetter)
            return false;
        }   
        return true;
    });
    return result;
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

