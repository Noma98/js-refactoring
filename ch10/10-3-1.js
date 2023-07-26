/**
 * 참인 경로, 거짓인 경로 모두 정상 동작일 경우, if...else 절 활용
 * 한쪽만 정상, 다른 한쪽은 비정상인 경우 비정상인 경우를 return하여 함수를 빠져나온다. (=== 보호 구문 )
 */
export function payAmount(employee) {
  if (employee.isSeparated) {
    //보호구문
    return { amount: 0, reasonCode: 'SEP' };
  }
  if (employee.isRetired) {
    //보호구문
    return { amount: 0, reasonCode: 'RET' };
  }
  return someFinalComputation();
}

function someFinalComputation() {
  return { amount: 999, reasonCode: 'UNICORN' };
}
