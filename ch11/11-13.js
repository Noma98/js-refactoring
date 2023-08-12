/**
 * 예상할 수 있는 실패 케이스인지 정말 예외적인 상황인지를 분리하는 것이 중요
 */
// const values = [];
// function getValueForPeriod(periodNumber) {
//   const value = values[periodNumber];
//   if (!value) {
//     throw new Error('value is undefined');
//   }
//   return value;
// }

// try {
//   getValueForPeriod(-10); // 충분히 예상 가능한 케이스
// } catch (error) {
//   console.log('에러 발생!');
// }

const values = [];
function getValueForPeriod(periodNumber) {
  //+JS는 배열의 인덱스를 넘어간다고 해서 크래쉬가 되지 않음
  // if (periodNumber < 0 || periodNumber >= values.length) {
  //   return 0;
  // }
  // return values[periodNumber];

  return values[periodNumber] ?? 0;
}

getValueForPeriod(-10);
