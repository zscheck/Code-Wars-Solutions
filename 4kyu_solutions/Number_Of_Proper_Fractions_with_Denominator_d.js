// If n is the numerator and d the denominator of a fraction, that fraction is
// defined a (reduced) proper fraction if and only if GCD(n,d)==1.

// For example 5/16 is a proper fraction, while 6/16 is not, as both 6 and 16
// are divisible by 2, thus the fraction can be reduced to 3/8.

// Now, if you consider a given number d, how many proper fractions can be built
// using d as a denominator?

// For example, let's assume that d is 15: you can build a total of 8 different
// proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15,
// 11/15, 13/15 and 14/15.

// You are to build a function that computes how many proper fractions you can
// build with a given denominator:

// properFractions(1)==0
// properFractions(2)==1
// properFractions(5)==4
// properFractions(15)==8
// properFractions(25)==20
// Be ready to handle big numbers.

// Edit: to be extra precise, the term should be "reduced" fractions, thanks to
// girianshiido for pointing this out and sorry for the use of an improper word
// :)

function properFractions(n){
    const primeFactors = [];
    const sqrt = Math.sqrt(n); // to limit runtime
  
    // Find all of the Prime Factors, then sort from largest to smallest
  
    for(let i=2;i<sqrt;i++){
      if(n%i === 0) {
        if(isPrime(i)) primeFactors.push(i);
        if(isPrime(n/i)) primeFactors.push(n/i);
      }
    }
    // So it isn't pushed twice
    if(n%sqrt === 0 && isPrime(sqrt)) primeFactors.push(sqrt);
    if(primeFactors.length === 0) return n-1; //Because it is a prime number
    
    primeFactors.sort((a,b) => b-a);
    
    // Subtract all of the instaces starting from the largest Prime Factor
    
    for(const factor of primeFactors) {
      let subtract = n/factor;
      n-= subtract;
    }
    return n;
}

const isPrime = (n) => {
    if(n===2) return true;
    if(n%2 === 0) return false;
    const sqrt = Math.sqrt(n);
    for(let i=3; i<=sqrt; i+=2){
      if(n%i === 0) return false;
    }
    return true;
}
