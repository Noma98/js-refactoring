export class Order {
  //-> 책은 private 필드를 나타낼 때 밑줄(_)을 사용하지만, 요즘은 #으로 표현
  #data;
  constructor(aRecord) {
    // this._data = aRecord;
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }
  //클래스에서도 동일하게 추출
  get price() {
    return this.basePrice - this.discount + this.shipping;
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}
