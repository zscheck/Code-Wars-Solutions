// You have to create a function that takes a positive integer number and
// returns the next bigger number formed by the same digits:

// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:

// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

function nextBigger(n){
    var num = n.toString().split('');
    if(num.length==1)
      {return -1;}
    for(var i = num.length-1; i>=0; i--){
      if(num[i]>num[i-1]){
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
            removed.sort((a, b)=> a-b);
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
      function isBigEnough(value) {
      return value > pivot;
      }
      var filtered = removed.filter(isBigEnough);
      var newPivot =filtered[0];
      var index = removed.indexOf(newPivot);
      removed.splice(index,1);
      removed.sort();
      var final = num.concat(newPivot, removed);
      return parseInt(final.join(''));
    }