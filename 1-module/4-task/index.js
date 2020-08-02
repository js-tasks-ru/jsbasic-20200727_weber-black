/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  let lowStr = str.toLowerCase();
  if (lowStr.includes("1xbet") || lowStr.includes("xxx")){
    return true;
  }
  else {
    return false;
  }
}
