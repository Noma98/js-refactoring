/**
 * 동일한 동작을 수행하는 다양한 조건들이 있다면 이를 하나의 조건문으로 뭉친 다음 알맞은 이름(의도)을 붙이자.
 */
function disabilityAmount(employee) {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;
}
function isNotEligibleForDisability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
