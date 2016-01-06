/*
 * Source code for samegame.xyz
 * Written by Nathan Lawrence - January, 2016
 *
 */

var numRows = 5;
var numCols = 5;
var grid = [];

//Makin' the Grid
for (column = 0; column < numCols; column += 1){

	var newCol = [];

	for (row = 0; row < numRows; row += 1){
		newCol[row] = 'test';
		console.log(column + ", " + row);
	}

	grid[column] = newCol; //Add the temporary column into the full grid.

}