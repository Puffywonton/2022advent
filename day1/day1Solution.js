import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const main = () => {
    const dataArray = []
    const fileStream = createReadStream('./day1/day1Input.txt');

    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    
    var tempTotal = 0
    rl.on('line', (line) => {
        if (line == '') {
            dataArray.push(tempTotal)
            tempTotal = 0
        } else {
            tempTotal = tempTotal + parseInt(line)
        }
    });

    rl.on('close', () => {
        dataArray.push(tempTotal)
        // findMostCaloriesElf(dataArray)
        topThreeElfs(dataArray)
    });

    
}

const findMostCaloriesElf = (array) => {
    let reference = 0
    array.forEach(element => {
        if (element > reference) {
            reference = element
        }
    });
    console.log(reference)
} 

const topThreeElfs = (array) => {
    let sorter = array.sort((a, b) => a - b)
    let topThree = sorter.slice(-3)
    const initialValue = 0;
    const topThreeTotal = topThree.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);  
    console.log(topThreeTotal)
}

main()