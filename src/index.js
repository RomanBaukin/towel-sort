// You should implement your task here.

module.exports = function towelSort(matrix) {
    const resultArr = [];

    for (let keyRow in matrix) {
        for (let keyCol in matrix[keyRow]) {
            let columnIndex = keyRow % 2 === 0 ? keyCol : matrix[keyRow].length - 1 - keyCol;

            resultArr.push(matrix[keyRow][columnIndex]);
        }
    }
    return resultArr;
}
