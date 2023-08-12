/**
 * 특정한 데이터와 계산이 프로그램 전반적으로 여기저기 재사용 된다면 클래스로 묶어서 가지고 있는 건 좋다
   하지만 계산이 한번만 필요한 경우도 클래스로 만들어 사용하면 비용 낭비임
   필요할 때마다 계속 인스턴스를 생성하는 것은 메모리를 많이 차지하므로 이 경우 유틸 함수로 한번만 선언해서 계속 호출하는 것이 낫다
 */
// export class ChargeCalculator {
//   constructor(customer, usage, provider) {
//     this._customer = customer;
//     this._usage = usage;
//     this._provider = provider;
//   }
//   get baseCharge() {
//     return this._customer.baseRate * this._usage;
//   }
//   get charge() {
//     return this.baseCharge + this._provider.connectionCharge;
//   }
// }
export function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
