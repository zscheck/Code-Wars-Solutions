// Your task is determine lowest number base system in which the input n (base
// 10), expressed in this number base system, is all 1 in its digit. See an
// example:

// '7' in base 2 is '111' - fits! answer is 2

// '21' in base 2 is '10101' - contains '0' does not fit '21' in base 3 is '210'
// - contains '0' and '2' does not fit '21' in base 4 is '111' - contains only
// '1' it fits! answer is 4

// n is always less than Number.MAX_SAFE_INTEGER.

function getMinBase (n) {
    let i = 2;
    let j = 1;
    let num = n;
    const cbrt = Math.cbrt(n); //to significantly lower runtime
    const sqrt = Math.sqrt(n); //for only chance after cube root case
      while(i<=cbrt){
      let b = Math.pow(i,j);
        if(num % b === 1) {
          num -= b;
          j++;
          if(num === 1){
          return i;
          }
          if(num< 1){
          num = n;
          j = 1;
          i++;
          }
        } else {
          num = n;
          j = 1;
          i++;
        }
      } 
      i = Math.floor(sqrt);
      for(let j = 1; j<3; j++){
          let b = Math.pow(i,j);
          if(num % b === 1) {
            num -= b;
            if(num === 1){
            return i;
            }
            if(num< 1) break;
          } else {
            break;
          }
      }
    return n-1;
}
