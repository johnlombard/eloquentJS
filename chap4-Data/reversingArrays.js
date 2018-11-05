// Have an array 
// place into function
// function returns new array in inverse order

// CAN NOT USE REVERSE METHOD
var array = [1, 2, 3, 4, 5];
let newArray = [];


const reverseArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    console.log(newArray);
};

reverseArray(array);




// const reverseArrayInPlace = (array) => {
//     let array = array.reverse();
//     console.log(newArray);
// };