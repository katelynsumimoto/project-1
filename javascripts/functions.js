// jshint esversion: 7

//Req 3b
let arrAvg = (arr) => {
  let sum = 0,
    average;
  for (var i = 0; i < arr.length; i++) {
    //arr[i]
    sum += arr[i];
  }
  average = sum / arr.length;
  return average;
};

//Req 3c
let arrMax = (arr) => {
  let largest = 0;

  arr.forEach(function(elem) {
    if (largest < elem)
      largest = elem;
  });
  console.log(largest);
};

//Req 3d
let sumEvens = (arr) => {

};