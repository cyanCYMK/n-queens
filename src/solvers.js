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
  var size = n;

  // Define the recursive function
  var assignRook = function(n, rowIndex){
    if( n === 0 ){
      return;
    }
    var row = board.get(rowIndex);

    for( var col = 0; col < size; col++ ){
      row[col] = 1;
      // Check for row & column
      if ( !board.hasAnyRowConflicts() && !board.hasAnyColConflicts() ){
        n--;
        rowIndex++;

        // recursively call assignRook with n-- and rowIndex++
        assignRook(n, rowIndex);
      }
      if( board.hasAnyRowConflicts() || board.hasAnyColConflicts() ){
        row[col] = 0;
      }
    }
    // recurse on row++, n--
    solution.push(row);
  };
  // Assign the first position to the rook
  // Loop through the possible position next rook
  // Call the recursive function with n - 1
  // If n === 0 return solution

  assignRook(n, rowIndex);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log(solution);
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var size = n;
  var board = new Board({'n': n});

  // First change findNRootSolution to provide arrays of possibilities
  // Call findNRootSolution here
  // Increment solutionCount at each call

  // Pass in as argument the board
  // create a for loop to check recursively each individual row


  var findSolutions = function(n, rowIndex){
    // for loop iterating over all columsn in row 0
      // if rowIndex > n
        // solutionCount++;
        // break;

      // get rowIndex row of board
      // do for loop over row with i
        // set rook on i
        // check for conflicts
          // if conflict, then rowIndex++
          // if no conflict, recurse
    //}
  };

  // for loop iterating over all columns in row 0
    // do findSolutions

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
