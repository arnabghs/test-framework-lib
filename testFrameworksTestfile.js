const {logHeading,testFunction} = require('./testFrameworkLibrary.js');


/*
 * 1. Selecting odd numbers - Given a list of numbers, select the ones that are odd
 */
const selectOddNumbers = function (array){
  let listOfOdds = [];
  for (value of array){
    if (value%2 != 0){
      listOfOdds.push(value)
    }
  }
  return listOfOdds;
}

/*
 * 2. Selecting even numbers - Given a list of numbers, select the ones that are even
 */

const selectEvenNumbers = function (array){
  let listOfEvens = [];
  for (value of array){
    if (value%2==0){
      listOfEvens.push(value)
    }
  }
  return listOfEvens;
}

/*
 *6. Reverse Fibonacci - Generate a fibonacci sequence of length n in reverse order
 */

const fiboReverse = function(length){
  let firstElement = 0;
  let secondElement = 1;
  let element = 0;
  let outputArray = [];
  for(let index=0 ; index < length ; index++) {
    outputArray[index] = firstElement;
    element = (firstElement+secondElement);
    firstElement = secondElement;
    secondElement = element;
  }
  outputArray = outputArray.reverse();
  return outputArray;
}

/*
 * 8. Lowest number in a list - Given a list of numbers, find the lowest number in that sequence
 */

const findLowestNumber = function(inputArray){
  let lowestNumber = inputArray[0];
  for (value of inputArray){
    if (value < lowestNumber){
      lowestNumber = value;
    }
  }
  return lowestNumber;
}


/*
 * 17. Ascending order - Given an array of numbers, check if the array is in ascending order
 */

const checkOrderForAscending = function(state,currvalue){
  let {prevValue, statement}  = state;
  if (prevValue < currvalue){
    statement.push(true);
  } else {
    statement.push(false);
  }
  return { prevValue : currvalue , statement : statement}
}

const checkAscendingOrder = function(inputArray){
  return statementArray = inputArray.reduce(checkOrderForAscending,
    {prevValue : inputArray[0]-1 , statement : [] }). statement.
    every( function (x){return x == true})
}

/*
 * 16. Index Of a Number - Given an array of numbers find the first position of a specified number
 */

const findIndex = function(inputArray,number){
  return indexOfNumber = inputArray.findIndex(function (element){
    return element == number
  });
}



logHeading();
testFunction(selectOddNumbers,[[1,3,4,5,6,7,8]],[1,3,5,7]);
testFunction(selectEvenNumbers,[[1,-3,-4,8]],[-4,8]);
testFunction(fiboReverse,[8],[13, 8, 5, 3, 2, 1, 1, 0]);
testFunction(findLowestNumber,[[1,3,4,0,-5,7,-10,5]],-10);
testFunction(checkAscendingOrder,[[1,2,9,4,5]],false);// multi elements array
testFunction(findIndex,[[1,4,0,-5,-6,7,-3,0],0] , 2);// array including 0 and -ve

console.log("\nfine msg");
