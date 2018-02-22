// Given a positive number n > 1 find the prime factor decomposition of n. The
// result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


function primeFactors(n){
    function isPrime(num) {
        if(num == 2) return true;
        for(let i = 3, s = Math.sqrt(num); i <= s; i+= 2)
            if(num % i === 0) return false; 
        return true;
    }

    var res= '';
    var factor;
    for(var i=2;i<=n;i++){
      if(isPrime(i) ===true){
        var count = 0;
        while(n%i == 0){
        n= n/i;
        count ++;
       }

       if(count ==0){
        factor = '';
       } else if(count ==1){
        factor = '('+i+')';
       } else {
        factor = '('+i+'**' + count + ')';
       }
       res= res+ factor;
       if(n==1){
        return res;
       }
      }
    }
}