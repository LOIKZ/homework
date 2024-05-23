document.addEventListener("DOMContentLoaded", function () {
  var boxes = document.querySelectorAll(".box");

  boxes.forEach(function (box) {
    box.addEventListener("click", function () {
      // 클릭된 div 태그에 clicked 클래스를 추가
      this.classList.add("clicked");
    });
  });
});
function getSquare(number) {
  return number * number;
}
