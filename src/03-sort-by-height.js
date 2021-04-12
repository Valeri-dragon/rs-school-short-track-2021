/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const total = arr;
  const ones = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (total[i] !== -1) {
      total[i] = +ones.splice(0, 1).join();
    }
  }
  return total;
}

module.exports = sortByHeight;
