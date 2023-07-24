// 예제 1
class Order {
  /**
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._discountedTotal;
  }
  
  //⛔️ discount를 set할 뿐인데 다른 필드도 업데이트 하고 있음
  set discount(value) { 
    const old = this._discount;
    this._discount = value;
    this._discountedTotal += old - value;
  }
  get discountedTotal() {
    return this._discountedTotal;
    return this._basePrice - this._discount;
  }
  */
  /*
 - 👍 필요한 것만 업데이트하고 해당 값과 관련되어 실시간으로 계산되어야 하는 값은 질의함수로 만드는 것이 좋음
 - 질의 함수: 연산을 통해 값을 계산하여 반환하는 함수. 질의는 내부 또는 외부의 값을 변경하여 부수 효과를 만들어선 안됨
 */
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    // return this._production;
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  get adjustment() {
    return adjust;
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    // this._production += adjustment.amount;
  }
}
