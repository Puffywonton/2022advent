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
    if ((a >= c && b <= d) || (c >= a && d <= b)) {
        return(true)
    }
    return(false)
}

main()