/**
 * 똑같은 코드를 반복하는 대신 함수 호출로 변경
 * 해당 기능을 하는 함수가 이미 존재한다면(기존에 라이브러리나 함수나 API가 있다면) 이 방법을 사용
 */

// let appliesToMass = false;
// for (const s of states) {
//   if (s === 'MA') appliesToMass = true;
// }
let appliesToMass = states.includes('MA');
