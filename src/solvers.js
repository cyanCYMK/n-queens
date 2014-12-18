/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({'n': n});
  var rowIndex = 0;
  // Define the recursive function

  var assignRook = function(n, rowIndex){
    if( n === 0 ){
      return;
    }
    var row = board.get(rowIndex);
    console.log(row);
    for( var i = 0; i < n; i++ ){
      if( row[i] === 0 ){

        row[i] = 1;
        // check for row & column
        if ( !board.hasAnyRowConflicts && !board.hasAnyColConflicts ){
          // recursively call assignRook with n-- and rowIndex++
          assignRook(n--, rowIndex++);/
        }
        return;
      }

    }
    // recurse on row++, n--
    solution.push(row);
  };
  // Assign the first position to the rook
  // Loop through the possible position next rook
  // Call the recursive function with n - 1
  // If n === 0 return solution
  debugger;
  assignRook(n, rowIndex);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
