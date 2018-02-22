// Write

// function smaller(arr)
 
// that given an array arr, you have to return the amount
// of numbers that are smaller than arr[i] to the right.

// For example:

// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0] smaller([1, 2, 0]) === [1, 1, 0]
// If you've completed this one and you feel like testing your performance
// tuning of this same kata, head over to the much tougher version How many are
// smaller than me II?

function smaller(arr) {
    var res=[];
    var test, lessThan;
       while(arr.length>0){
         test=arr[0];
         lessThan = arr.filter(x=> x < test);
         res.push(lessThan.length);
         arr.shift();
      }
      return res;
}