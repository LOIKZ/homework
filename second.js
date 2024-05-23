function handleScroll() {
  // 현재 스크롤 위치를 가져옴
  var scrollTop = window.scrollY;
  console.log("현재 스크롤 위치:", scrollTop);
}

// 스크롤 이벤트에 핸들러 함수 연결
window.addEventListener("scroll", handleScroll);

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}

setTimeout(function () {
  console.log("**3초 후에 출력되는 텍스트입니다.**");
}, 3000); // 3000 밀리초 (3초)
