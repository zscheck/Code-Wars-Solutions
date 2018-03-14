// Snail Sort
// Given an n x n array, return the array elements arranged from outermost
// elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array
// consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest;
// the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as [[]]

snail = function(array) {
    const results = [];
    let counter = 0;
    let startColumn = 0;
    let endColumn = array[0].length - 1;
    let startRow = 0;
    let endRow = array.length - 1;
    
    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
          results[counter] =array[startRow][i];
          counter++;
        }
        startRow++;
    
        // Right column
        for (let i = startRow; i <= endRow; i++) {
          results[counter] = array[i][endColumn];
          counter++;
        }
        endColumn--;
    
        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
          results[counter] = array[endRow][i];
          counter++;
        }
        endRow--;
    
        // start column
        for (let i = endRow; i >= startRow; i--) {
          results[counter] = array[i][startColumn];
          counter++;
        }
        startColumn++;
      }
    return results;
}