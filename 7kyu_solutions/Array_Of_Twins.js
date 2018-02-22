// You are given an array of numbers. Check if the array contains of pairs, i.e
// every number occurs exactly two times. If true, return true, otherwise false.
// Your solution should not modify the input array.

function twins(myArray){
    var copy= myArray.slice();
    copy.sort();
    for(let i=1;i<=copy.length;i++){
      if(i%2==1){
        if(copy[i]!=copy[i-1]){return false};
        if(copy[i]==copy[i+1]){return false};
      }
    }
      return true;
}