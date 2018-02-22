// Write a function that takes a positive integer and returns the next smaller
// positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1, when there is no smaller number that contains the same digits.
// Also return -1 when the next smaller number with the same digits would
// require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.


function nextSmaller(n) {
    var num = n.toString().split('');
    if(num.length==1)
      {return -1;}
    for(var i = num.length-1; i>0; i--){
      if(num[i]<num[i-1]){
      var removed = num.splice(i-1);
       break;
       }
      }
      if(removed == undefined)return -1;
      if(num.length == 0 && removed[1] == 0){
        if(removed[0]<=removed[2]){
         if(removed[2] == 0) {return -1;}
         return -1;
         } else if(removed.length==2){
         return -1;
         } else {
          var zero = removed.splice(1,1);
          removed.sort((a, b) => a-b);
          var final= num.concat(removed, zero);
          return parseInt(final.join(''));
          }
        }
      if(removed.length == 2){
        var first = removed.splice(0,1);
        var final = num.concat(removed, first);
        return parseInt(final.join(''));
      }
      var pivot = removed[0];
      function isSmallEnough(value) {
      return value < pivot;
      }
      var filtered = removed.filter(isSmallEnough);
      filtered.sort().reverse();
      var newPivot =filtered[0];
      var index = removed.indexOf(newPivot);
      removed.splice(index, 1);
      removed.sort().reverse();
      var final = num.concat(newPivot, removed);
      return parseInt(final.join(''));
    }