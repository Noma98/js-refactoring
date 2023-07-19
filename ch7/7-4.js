//문제점: Order의 basePrice, discountFactor가 얼마인지 궁금해도 알 수 없음
class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  //특정한 함수나 코드 블럭 속에서 사용하고 있는 임시 변수를 질의 함수(getter)로 만들어 둠으로써 활용성을 높일 수 있음
  get basePrice() {
    return this.#quantity * this.#item.price;
  }
  get discountFactor() {
    return this.basePrice > 1000 ? 0.95 : 0.98;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
