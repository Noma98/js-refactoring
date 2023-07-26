/**
 * 부정!과 부정!을 묶으면 이해하기 어려움 → 표현식을 변수로 추출해서 의미있는 이름을 부여하거나, 질의 함수로 추출
 * 하나하나 다 읽어야 이해할 수 있음 → 딱보고 알 수 있게 함수 단위로 추출
 * 중괄호를 사용하지 않는 if문은 바로 아래 한줄만 적용이 되는데 이는 버그를 발생시킬 수 있어서(ex. 다른 개발자가 그 밑에 이어서 작성할 경우 그 다음 줄은 무시됨), 한줄이라도 중괄호를 사용해 표현하는 것이 좋음
 */
function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  //아래 함수들을 외부에서도 재사용해야 한다면, 외부로 추출하고 필요한 인자를 전달하거나 클래스의 질의함수(getter)로 만들어 사용할 수 있음
  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }
  function summerCharge() {
    return quantity * plan.summerRate;
  }
  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
