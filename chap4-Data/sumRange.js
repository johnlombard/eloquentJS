//User types in a range of start and end 
// Numbers beginning at start and finishing at end are pushed to an array
// An array is displayed showing the full array
let array = [];

// const fullRange = (start, end) => {

// for (let i = start; i <= end; i++) {
//     array.push(i);
// }
// console.log(array);

// };

// fullRange(1, 10);

// const sum = array.reduce((start, end) => start + end);

// console.log(sum);

const fullRange = (start, end, step) => {

    for (let i = start; i <= end; i+= step) {
console.log(i)    }
    console.log(array);
    
    };

    fullRange(1, 10, 5);