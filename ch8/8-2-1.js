export class Customer {
  //고객에는 name과 contract에 대한 것만 가지고 discountRate은 계약 안으로 들어가는게 좀더 적합함
  // #discountRate;
  #name;
  #contract;
  constructor(name, discountRate) {
    // this.#discountRate = discountRate;
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday(), discountRate);
  }

  becomePreferred() {
    this.#contract.discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#contract.discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }
  get discountRate() {
    return this.#discountRate;
  }
  set discountRate(value) {
    this.#discountRate = value;
  }
}
