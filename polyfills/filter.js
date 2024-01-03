const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredArr = arr.filter((value, index, array) => {
//   return value > 4;
// });

// console.log(filteredArr);

// OUTPUT
// [ 5, 6, 7, 8, 9, 10 ]

Array.prototype.myFilter = function (callback) {
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this) !== undefined) {
      newArr.push(callback(this[index], index, this));
    }
  }

  return newArr;
};

const newFilteredArr = arr.myFilter((value, index, array) => {
  if (value > 4) {
    return value;
  }
});

console.log(newFilteredArr);

// OUTPUT
// [ 5, 6, 7, 8, 9, 10 ]
