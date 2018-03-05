// Preloaded 
// Preloaded for you is a class/struct Node (depending on the
// language) used to construct linked lists in this Kata:

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
// 
// Task
// Create a function stringify which accepts an argument list/$list and returns
// a string representation of the list. The string representation of the list
// starts with the value of the current Node, specified by its data/$data/Data
// property, followed by a whitespace character, an arrow and another whitespace
// character (" -> "), followed by the rest of the list. The end of the string
// representation of a list must always end with null/NULL/None/nil/nullptr (all
// caps or all lowercase depending on the language you are undertaking this Kata
// in). For example, given the following list:

// new Node(1, new Node(2, new Node(3)))
// ... its string representation would be:

// "1 -> 2 -> 3 -> null"
// And given the following linked list:

// new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
// ... its string representation would be:

// "0 -> 1 -> 4 -> 9 -> 16 -> null"

function stringify(list) {
    let ans = '';
    while(list) {
      ans += list.data + ' -> ';
      list = list.next;
    }
    return ans += null;
}
