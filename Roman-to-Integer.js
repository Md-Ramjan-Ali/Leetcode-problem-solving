var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current = values[s[i]]
    let next =values[s[i+1]]

    if(current && current < next){
      total -=current
    }else{
      total +=current
    }
  }
  return total;
};

console.log(romanToInt("III"));
// 3
// console.log(romanToInt("LVIII"));
 // 58  (50 + 5 + 3)
// console.log(romanToInt("MCMXCIV"));
// 1994 (1000 + 900 + 90 + 4)
