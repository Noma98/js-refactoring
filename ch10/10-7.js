/**
- 불리언 플래그를 쓰는 대신에 함수 상단에서 특정 조건이 되면 바로 리턴될 수 있게 하는 것이 좋음
 */
for (const p of people) {
  // if (!found) {
  //   if (p === 'Don') {
  //     sendAlert();
  //     found = true;
  //   }
  // }
  if (p === 'Don') {
    sendAlert();
    break;
  }
}
