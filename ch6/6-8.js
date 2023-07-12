/*
 함수에 여러 가지 데이터를 전달한다면,  
- 그 데이터 중 하나의 객체로 묶을 수 있는게 존재하는지 확인
- 더 나아가 그 객체 안에 유용한 함수를 만들어 호출하는 방식으로 함수의 가독성을 높일 수 없는지 고민 
 */
export function readingsOutsideRange(readings, range) {
  return readings.filter((r) => !range.contains(r.temp));
}
//데이터와 데이터를 처리하는 로직들이 여기저기 흩어져 있지 않게 관련된 것들을 클래스로 한 곳에 묶어주기
export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  get min() {
    return this.#min;
  }
  get max() {
    return this.#max;
  }
  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}
const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};
const operationPlan = new NumberRange(51, 53);

console.log(readingsOutsideRange(station.readings, operationPlan));
