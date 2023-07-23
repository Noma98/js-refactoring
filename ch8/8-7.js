/**
 * 문제점
 *  - 반복문은 시간 복잡도가 BigO(N)이어서 대부분의 개발자들이 한 반복문에 넣을 수 있는 코드를 전부 넣음
 *  - ❗️반복문은 한번에 한가지에 관련된 것만 처리하도록 쪼개자 -> 그러면 시간 복잡도가 N*BigO(N)이 되는데 N의 N승과 달리 앞에 N이 곱해지는 것 정도는 무시해도 됨.
 *  - N*BigO(N) = BigO(N) 이라고 생각해도 O -> 성능 측면에서 전혀 문제 없음
 */

export function reportYoungestAgeAndTotalSalary(people) {
  //함수 선언문은 어차피 호이스팅이 되니깐 리턴 구문을 최상단으로 이동
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  //반복문 쪼개기 -> 연관된 거 함수로 묶기 -> 코드 개선(파이프라인으로 변경)
  //youngestAge, totalSalary 둘다 people을 밀접하게 사용하여 응집도를 위해 내부 함수로 두었지만, 추후 외부에서도 사용된다면 바깥으로 분리해주는 것이 좋음
  function youngestAge() {
    // let youngest = people[0] ? people[0].age : Infinity;
    // for (const p of people) {
    //   if (p.age < youngest) youngest = p.age;
    // }
    // return youngest;
    return Math.min(...people.map((p) => p.age));
  }
  function totalSalary() {
    // let totalSalary = 0;
    // for (const p of people) {
    //   totalSalary += p.salary;
    // }
    // return totalSalary;
    return people.reduce((total, p) => (total += p.salary), 0);
  }
}
