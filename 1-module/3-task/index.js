/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if (!str.length){
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}
