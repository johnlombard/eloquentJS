const arrayToList = (array) => {
    let list = {};


    for(let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list };
        console.log(array[i])    
    }
  return list;
};

console.log(arrayToList([10, 20, 30, 40, 50]));

const listToArray = (array) => {
    let list = {};


    for(let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list };
        console.log(array[i])    
    }
  return list;
};