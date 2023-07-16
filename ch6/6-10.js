/**
 * class와 변환함수의 차이
 *  class의 getter는 호출되는 시점에 데이터를 연산하여 반환하지만,
 *  변환함수는 호출된 시점의 데이터를 가지고 계산된 값을 한번 저장하고, 그 후 데이터가 변경되어도 업데이트 되지 않음
 *  웬만해선 class를 사용하는게 더 편함
 */

import _ from 'lodash';
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}
export function enrichReading(original) {
  //const result = { ...original }; 또는 Object.assign : 얕은 복사가 이루어짐
  const result = _.cloneDeep(original);
  result.baseCharge = calcuelateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
}
function calcuelateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}
export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
