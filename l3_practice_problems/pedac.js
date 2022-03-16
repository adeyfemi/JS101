function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum < rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }
  let finalRow = rows.pop();
  let finalRowSum = 0;
  finalRow.forEach(num => finalRowSum + num);
  // finalRow.reduce((a,b) => a + b) // using reduce method
  return rows; // TODO: sum final row
}


function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }

  return row;

}

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68


console.log(createRow(2, 1)); // [2]
console.log(createRow(4, 2)); // [4, 6]
console.log(createRow(8, 3)); // [8, 10, 12]

