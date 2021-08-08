const WINNER_ROW_COUNT = 5;

const reverseColumns = <M>(matrix: M[][]) => matrix.map(row => [...row].reverse());

/**
 * https://stackoverflow.com/a/59171026/8995887
 */
const transpose = <M>(matrix: M[][]) =>
  matrix.map((_col, c) => matrix.map((_row, r) => matrix[r][c]));

const getDiagonals = <M>(matrix: M[][]) => {
  const result: M[][] = [];
  const matrixSize = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const rowIndex = matrixSize - 1 + i - j;
      result[rowIndex] = result[rowIndex] === undefined ? [] : result[rowIndex];
      result[rowIndex].push(matrix[i][j]);
    }
  }
  return result;
};

const getReverseDiagonals = <M>(matrix: M[][]) => getDiagonals(reverseColumns(matrix));

/**
 * https://stackoverflow.com/a/64535426/8995887
 */
const longestSequence = <M>(seq: M[]) => {
  let maxSymbolCount = 0;
  let curCount = 0;
  let maxSymbolValue: null | M = null;
  let curItem: null | M;
  let prevItem: null | M = null;
  let l = seq.length + 2; // +1+1 to finish last sequence and compare 'undefined' with previous

  for (let i = 0; i < l; ++i) {
    curItem = seq[i];
    if (curItem === null || curItem === undefined) {
      if (curCount > maxSymbolCount) {
        maxSymbolCount = curCount;
        maxSymbolValue = prevItem;
      }
      curCount = 0;
      prevItem = curItem;
    } else if (curItem === prevItem) {
      curCount++;
    } else {
      if (curCount > maxSymbolCount) {
        maxSymbolCount = curCount;
        maxSymbolValue = prevItem;
      }
      curCount = 1;
      prevItem = curItem;
    }
  }
  return [maxSymbolCount, maxSymbolValue];
};

const checkWinnerMatrixSequence = <M>(matrix: M[][]) => {
  const result = matrix
    .map(row => longestSequence(row))
    .find(([maxSymbolCount]) => maxSymbolCount! >= WINNER_ROW_COUNT);

  return result ? result[1] : null;
};

export const checkWinner = <M>(matrix: M[][]) => {
  const rows = matrix;
  const columns = transpose(matrix);
  const diagonals = getDiagonals(matrix);
  const reverseDiagonals = getReverseDiagonals(matrix);

  const winOption1 = checkWinnerMatrixSequence(rows);
  const winOption2 = checkWinnerMatrixSequence(columns);
  const winOption3 = checkWinnerMatrixSequence(diagonals);
  const winOption4 = checkWinnerMatrixSequence(reverseDiagonals);

  if (winOption1 || winOption2 || winOption3 || winOption4) return true;

  return null;
};
