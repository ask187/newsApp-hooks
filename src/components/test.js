//9 ->  (2,3,4) , (4,5)
let spliter = (n, initialValue) => {
  let retarray = [];
  let sumValue = 0;
  for (let i = initialValue; i < n; i++) {
    sumValue += i;
    if (sumValue === n) {
      //return the array into the obj
      retarray.push(i);
      console.log(`${retarray}`);
    }
    if (sumValue < n) {
      retarray.push(i);
    }

    if (sumValue > n) {
      retarray = [];
    }
  }
};

let consecutiveValue = (n) => {
  let consecNos = [];
  //get possible nos
  let possibleCases = {};
  for (let i = 1; i <= n; i++) {
    consecNos.push(i);
  }

  for (let i = 0; i < n; i++) {
    spliter(n, i);
  }
};

consecutiveValue(45);
