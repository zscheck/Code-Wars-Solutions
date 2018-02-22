// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

// In number theory and combinatorics, a partition of a positive integer n, also
// called an integer partition, is a way of writing n as a sum of positive
// integers. Two sums that differ only in the order of their summands are
// considered the same partition. If order matters, the sum becomes a
// composition. For example, 4 can be partitioned in five distinct ways:

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1
// Examples
// Trivial
// sum(-1) // 0
// sum(1) // 1
// Basic
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
// Explosive
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292

function sum (target) {
    let num = [];
    let first = [];
    let second = [];
    
    if (target <= 0) return 0;
    for (var i = 1; i <= target; i++) {
      num[i] = i;
    }
    
    for (var i = 0; i <= target; i++) {
      first[i] = second[i] = 0;
    }

    first[0] = 1;
    for (var i = 0; i < num.length; i++) {
      for (var j = 0; j <= target; j++) {
        for (var k = 0; j + k <= target; k += num[i]){
          second[j + k] += first[j];
        }
      }
      for (var j = 0; j <= target; j++) {
        first[j] = second[j], second[j] = 0;
      }
    }
    return first[target];
}