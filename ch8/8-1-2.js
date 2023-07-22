export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  //*책 의견: 프리미엄 여부에 따라 요금이 확확 바뀌기 때문에 AccountType안으로 이동
  // get overdraftCharge() {
  //   if (this.type.isPremium) {
  //     const baseCharge = 10;
  //     if (this._daysOverdrawn <= 7) return baseCharge;
  //     else return baseCharge + (this._daysOverdrawn - 7) * 0.85;
  //   } else return this._daysOverdrawn * 1.75;
  // }

  //*엘리 의견: AccountType은 타입에 대한 정보만 가지고 있는 클래스인데 overdraftCharge는 순수 타입만 가지고 계산하는 것이 아니라 특정 계좌에서 얼마만큼 overdrawn 되었는지에 대한 정보가 필요함으로 Account 안에 있는 게 더 맞다고 생각함
  //이러한 부분은 주관적이기 때문에 정답이 없음. 나중에 Account와 AccountType 클래스가 각각 얼마나 많은 기능을 담당하냐, 어떻게 변화되가느냐에 따라 개발하면서 리팩토링 해나가면 됨
  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}
export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }
  overdraftCharge(daysOverdrawn) {
    //중첩된 if문은 제거하는 것이 좋음.
    //빨리, 간단하게 return 해줄 수 있는 거 먼저 처리해서 나갈 수 있게 해주고 그 후에 안에 있던 중첩문을 풀어서 작성
    //중첩된 것이 if else 문이면 그냥 삼항연산자로 리턴
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    }
    const baseCharge = 10;
    return daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}
