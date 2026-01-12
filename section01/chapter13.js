// 1. 콜백 함수
function main(value) {
  // console.log(1);
  // console.log(2);
  value();
  // console.log("end");
}

main(() => {
  // console.log("I am sub");
});

// 2. 콜백함수의 활용
function repeat(conut, callback) {
  for (let idx = 1; idx <= conut; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
