import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const loss = 0
const draw = 3
const win = 6
const rock = 1
const paper = 2
const scissor = 3

const main = () => {
    const dataArray = []
    const fileStream = createReadStream('./day2/day2Input.txt');

    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    
    rl.on('line', (line) => {
        dataArray.push(line)
    });

    rl.on('close', () => {
        partOne(dataArray)
        partTwo(dataArray)
    });
}

const partOne = (array) => {
    const myMatrix = {
        'A': {
            'X': draw + rock,
            'Y': win + paper,
            'Z': loss + scissor
        },
        'B': {
            'X': loss + rock,
            'Y': draw + paper,
            'Z': win + scissor
        },
        'C': {
            'X': win + rock,
            'Y': loss + paper,
            'Z': draw + scissor
        }
    }
    let roundScoreArray = array.map(x => {
        let elfMove = x[0]
        let myMove = x[2]
        return myMatrix[elfMove][myMove]
    })
    const initialValue = 0;
    const myTotalScore = roundScoreArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);  
    console.log('PART A Solution: ', myTotalScore)
}

const partTwo = (array) => {
    const myMatrix = {
        'A': {
            'X': loss + scissor,
            'Y': draw + rock,
            'Z': win + paper
        },
        'B': {
            'X': loss + rock,
            'Y': draw + paper,
            'Z': win + scissor
        },
        'C': {
            'X': loss + paper,
            'Y': draw + scissor,
            'Z': win + rock
        }
    }
    let roundScoreArray = array.map(x => {
        let elfMove = x[0]
        let myMove = x[2]
        return myMatrix[elfMove][myMove]
    })
    const initialValue = 0;
    const myTotalScore = roundScoreArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);  
    console.log('PART B Solution: ', myTotalScore)
}


main()