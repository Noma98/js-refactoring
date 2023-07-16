/**
 6 - 9 ~6 - 9 - client3
 (개선 전)
 * 데이터와 데이터를 사용하는 곳이 여기저기 흩어져 있음
 * 코드 중복이 많고 재사용성도 떨어짐
 
 (개선 후)
 * reading과 그것을 베이스로 한 baseCharge, taxableCharge 등을 Reading이라는 클래스 안에서 필요한 데이터로 갖고 있고 연산이 가능하도록 만듦
 */

export class Reading {
  #customer;
  #quantity;
  #month;
  #year;
  constructor({ customer, quantity, month, year }) {
    this.#customer = customer;
    this.#quantity = quantity;
    this.#month = month;
    this.#year = year;
  }
  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }
  get baseRate() {
    if (this.#year === 2017 && this.#month == 5) return 0.1;
    return 0.2;
  }
  get baseCharge() {
    return this.baseRate * this.quantity; //quantity는 private field지만 getter가 있어서 # 없이 접근 가능
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }
}
const reading = new Reading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});
export function acquireReading() {
  return reading;
}
