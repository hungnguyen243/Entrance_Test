function checkGuess(luckyNumber) {
  var inputNumber = document.getElementById("inputNumber");
  if (inputNumber == luckyNumber) {
    return true;
  } else {
    return false;
  }
}

function countGuesses() {
  var luckyNumber = Math.floor(Math.random() * 10) + 1;
  var result = document.getElementById("result");
  result.style.display = "none";
  if (checkGuess(luckyNumber) == true) {
    result.innerHTML = "Chúc mừng! Bạn đã trúng thưởng!";
    result.style.display = "block";
  } else {
    result.innerHTML = "Bạn đã đoán sai. Con số may mắn là: " + luckyNumber;
    result.style.display = "block";
  }
}

var count = 0;
function limitCounts() {
  if (count < 3) {
    countGuesses();
    count += 1;
  } else {
    result.style.display = "block";
    result.innerHTML = "Bạn đã hết lượt dự đoán";
  }
}
