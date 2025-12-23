// 1. 변수
let age = 27;
// console.log(age);

// 언제든 변경 가능
age = 24;
// console.log(age);

// 2. 상수 (다시 변경 불가)
const birth = "2002.07.28";

// birth = "30";

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name = "MJ";

// 3-2. 숫자로 시작할 수 없다.
let name1;
// let 2name;

// 3-3. 예약어를 사용할 수 없다.
// let let, if;

// 4. 변수 명명 가이드
let saleCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
