assert = require('assert');

const assertOutput = function (actualOutput,expectedOutput){
  assert.deepEqual(actualOutput,expectedOutput);
}

const justify = function (text,length){
  let NumberOfSpaces = Math.abs(length - text.length);
  let spaces = new Array(NumberOfSpaces).fill(' ').join('');
  output = text+spaces;
  return output;
}

let serialNo = 1;

const incrementSerialNo = function(){
  serialNo += 1;
}

const logTestCase = function (functionName,input,actualOutput,expectedOutput){
  let line = '';
  line = justify(serialNo.toString(),5)+" | ";
  line += justify(functionName.name,22)+" | ";
  line += justify (JSON.stringify(input),40)+" | ";
  line += justify(JSON.stringify(actualOutput),25)+" | ";
  line += justify(JSON.stringify(expectedOutput),25);
  incrementSerialNo();

  console.log(line);
}

const logDottedLine = function(){
   console.log(new Array (125).fill('-').join(''));
}

const logHeading = function (){
  let heading = justify("SerialNo",5)+" | ";
  heading += justify("function name",22)+" | ";
  heading += justify("input",40)+" | ";
  heading += justify("actual Output",25)+" | ";
  heading += justify("expected Output",25)+"\n";
  console.log(heading);
}

const testFunction = function(functionName,input,expectedOutput){
  let actualOutput = functionName(input[0], input[1]); 
  logTestCase(functionName,input,actualOutput,expectedOutput);
  assertOutput(actualOutput,expectedOutput);
}

module.exports = {logHeading , testFunction, logDottedLine };
