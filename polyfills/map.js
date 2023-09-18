const arr = [1, 2, 3, 4, 5];

// const newArray = arr.map((value, index, array) => {
//   return value * 10;
// });

// console.log(newArray);

//OUTPUT => [ 10, 20, 30, 40, 50 ]

Array.prototype.myMap = function (callback) {
  const newArr = [];
  for (let index = 0; index < this.length; index++) {
    newArr.push(callback(this[index], index, this));
  }
  return newArr;
};

const polyArray = arr.myMap((value, index, array) => {
  return value * 10;
});

console.log(polyArray);

//OUTPUT => [ 10, 20, 30, 40, 50 ]
