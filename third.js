let counterElement = document.querySelector("#counter");
let count = 0;

let intervalId = setInterval(function () {
  count++;
  counterElement.textContent = count;

  if (count === 5) {
    console.log("종료");
    clearInterval(intervalId); // setInterval 종료
  }
}, 1000); // 1초마다 실행
