// 함수 선언
// -> 호이스팅 가능
function greeting() {
  console.log("안녕하세요!");
}

// console.log("호출 전");
// greeting();
// console.log("호출 후");

function getArea(width, height) {
  // 매개변수, 인수
  let area = width * height;
  //   console.log(area);
}

// getArea(10, 30);

function getArea2(width, height) {
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;

  return area;
}

let area2 = getArea2(30, 20);
console.log(area2);
