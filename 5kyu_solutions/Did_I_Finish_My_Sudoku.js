// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as
// parameter. If the board is valid return 'Finished!', otherwise return 'Try
// again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region
// contains the numbers one through nine only once.

// Rows:



// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the
// numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers
// in any row. In other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not
// be changed. The remaining numbers in black are the numbers that you fill in
// to complete the row.

// Columns:



// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for
// rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and
// 9. Again, there may not be any duplicate numbers in any column. Each column
// will be unique as a result.

// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be
// changed. You fill in the remaining numbers as shown in black to complete the
// column.

// Regions



// A region is a 3x3 box like the one shown to the left. There are 9 regions in
// a traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also
// contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not
// permitted in any region. Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be
// changed. Fill in the remaining numbers as shown in black to complete the
// region.

// Valid board example:



// For those who don't know the game, here are some information about rules and
// how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and
// http://www.sudokuessentials.com/


function doneOrNot(board){
    var rsum;
    var c1sum=0,c2sum=0,c3sum=0,c4sum=0,c5sum=0,c6sum=0,c7sum=0,c8sum=0,c9sum=0;
    var s1sum=0,s2sum=0,s3sum=0,s4sum=0,s5sum=0,s6sum=0,s7sum=0,s8sum=0,s9sum=0;
     
    function add(a, b) {return a + b}
      for(let i=0;i<board.length;i++){
        rsum = board[i].reduce(add, 0);
        if(rsum!=45)return 'Try again!';
      }
      for(let i=0;i<board.length;i++){
        c1sum+=board[i][0];
        c2sum+=board[i][1];
        c3sum+=board[i][2];
        c4sum+=board[i][3];
        c5sum+=board[i][4];
        c6sum+=board[i][5];
        c7sum+=board[i][6];
        c8sum+=board[i][7];
        c9sum+=board[i][8];
      }
      if(c1sum!=45||c2sum!=45||c3sum!=45||c4sum!=45||c5sum!=45||c6sum!=45||c7sum!=45||c8sum!=45||c9sum!=45){
        return'Try again!';
      }
      for(let i=0;i<=2;i++){
        for(let j=0;j<9;j++){
          if(0<=j&&j<=2){
            s1sum+=board[i][j];
          }else if(3<=j&&j<=5){
            s2sum+=board[i][j];
          }else if(6<=j&&j<=8){
            s3sum+=board[i][j];
          }
        }
      }
      if(s1sum!=45||s2sum!=45||s3sum!=45){
        return 'Try again!';
      }
      for(let i=3;i<=5;i++){
        for(let j=0;j<9;j++){
          if(0<=j&&j<=2){
            s4sum+=board[i][j];
          }
          if(3<=j&&j<=5){
            s5sum+=board[i][j];
          }
          if(6<=j&&j<=8){
            s6sum+=board[i][j];
          }
        }
      }
      if(s4sum!=45||s5sum!=45||s6sum!=45){
        return 'Try again!';
      }
      for(let i=6;i<=8;i++){
        for(let j=0;j<9;j++){
          if(0<=j&&j<=2){
            s7sum+=board[i][j];
          }
          if(3<=j&&j<=5){
            s8sum+=board[i][j];
          }
          if(6<=j&&j<=8){
            s9sum+=board[i][j];
          }
        }
      }
      if(s7sum!=45||s8sum!=45||s9sum!=45){
        return 'Try again!';
      }
      return 'Finished!';
}