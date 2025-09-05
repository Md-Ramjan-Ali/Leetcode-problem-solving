// function replacement(a) {
//   return a.map((num) => {
//     if (num > 0) return 1;
//     if (num < 0) return 2;
//     return 0;
//   });
// }


// console.log(replacement([3, -5, 0, 7, -1, 0]));

/* Problem Statement:
A number array A will be given. Iterate over the array, if any number found which is less than or equal to 10, print the number in this format: A[i] = v. Note that, you should return the string that contains the result, you can't print the result inside the function.
*/

function positions(a) {
  const result =[];
  for(let i =0; i < a.length; i++){
    if(a[i] <=10){
      result.push(`A[${i}] = ${a[i]}`);
    }
  }
  return result.join("\n")
}

console.log(positions([4, 6, 21, 0, 42, 3]));