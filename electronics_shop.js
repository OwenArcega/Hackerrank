//Owen Arcega Guerrero
function getMoneySpent(keyboards, drives, b) {
  let maximum = 0;
  for(let i = 0, j = 0; i < Math.max(keyboards.length,drives.length); j++){
    if(maximum < keyboards[i] + drives[j]){
      if(!(keyboards[i] + drives[j] > b)){
        maximum = keyboards[i] + drives[j];
      }
    }
    if(j >= drives.length){
      j = 0;
      i++;
    }
  }
  return (maximum == 0 ? -1 : maximum);
}

// console.log(getMoneySpent([3,1],[5,2,8],10));
console.log(getMoneySpent([4],[5],5));