export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }
  //우선순위를 받아서 예약을 먼저 처리해주고 싶은 경우
  addReservation(customer, isPriority = false) {
    //'boolean 타입의 매개변수'(=플래그)를 받아 그것에 따라 함수의 동작을 다르게 하는 것 좋지 않음 -> 다른 챕터에서 다룸
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
