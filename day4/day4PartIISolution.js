import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const main = () => {
    const fileStream = createReadStream('./day4/day4Input.txt');
    var total = 0
    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        let lineArray = line.split(',');
        console.log('-------')
        console.log(line)
        let comparatorArray = []
        lineArray.forEach(element => {
            comparatorArray.push(element.split('-'))
        });
        if (comparator(comparatorArray)) {
            total++
        }
    });

    rl.on('close', () => {
        console.log('---------------')
        console.log("total: ", total)
    });
}

const comparator = (array) => {
    let b = parseInt(array[0][1])
    let a = parseInt(array[0][0])
    let c = parseInt(array[1][0])
    let d = parseInt(array[1][1])
    if ((a < c && b < c) || (a > d && b > d) || (c < a && d < a) || (c > b && d > b)) {
        console.log('array is not in array')
        return(false)
    }
    return(true)
}

main()