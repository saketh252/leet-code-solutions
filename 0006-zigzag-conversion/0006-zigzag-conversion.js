/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // Edge cases
    if (numRows === 1 || numRows >= s.length) return s;

    // Create rows
    const rows = new Array(numRows).fill('').map(() => '');

    let curRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[curRow] += char;

        // Change direction at top or bottom
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }

        curRow += goingDown ? 1 : -1;
    }

    // Combine all rows
    return rows.join('');
};