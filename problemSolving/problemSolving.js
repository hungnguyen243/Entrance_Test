/* Problem 1 */
function findOppositeNumber(n, inputNumber) {
  var unitDistance = 360 / n;
  var oppositeNumber = (inputNumber + 180 / unitDistance) % n;
  return oppositeNumber;
}
/* Test cases */
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));

/* Problem 2*/

function merge2String(s1, s2) {
  var output = "";
  var i = 0;
  while (i < s1.length && i < s2.length) {
    output += s1[i];
    output += s2[i];
    i++;
  }
  if (s1.length > s2.length) {
    for (var j = i; j < s1.length; j++) {
      output += s1[j];
    }
  } else {
    for (var j = i; j < s2.length; j++) {
      output += s2[j];
    }
  }
  return output;
}

/* Test cases */
console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));
