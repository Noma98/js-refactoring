// export function ascentVelocity(points, totalMinutes) {
//   function calculateAscent() {
//     for (let i = 1; i < points.length; i++) {
//       //💩 문제점 : 외부 변수(totalAscent)를 직접 업데이트 하고 있음 -> 사이드이펙트를 야기하는 나쁜 코드
//       const verticalChange = points[i].elevation - points[i - 1].elevation;
//       totalAscent += verticalChange > 0 ? verticalChange : 0;
//     }
//   }

//   let totalAscent = 0;
//   calculateAscent([{ elevation: 10 }, { elevation: 20 }]);

//   return totalAscent / totalMinutes;
// }

//👍 수정된 값을 반환하여 변수에 할당하는 식으로 작성하는게 좋음
export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  const totalAscent = calculateAscent([{ elevation: 10 }, { elevation: 20 }]);
  return totalAscent / totalMinutes;
}
