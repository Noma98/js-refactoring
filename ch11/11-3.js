/**
 * 함수에 불리언 타입의 플래그를 전달해 값에 따라 다른 동작을 하도록 만드는 건 좋지 X -> 명령형으로 개별 분리해야함
 * 내부 로직이 서로 너무 중복된다면, 외부에서는 두가지의 다른 인터페이스를 통해 개별적으로 호출할 수 있게 만들어 놓고, 내부에 private 함수를 만들어 플래그로 공통 로직을 처리해도 됨
 * 가장 좋은 건 매개변수가 없어도 되는 함수
 */

// 예제 1
// function setDimension(name, value) {
//   if (name === 'height') {
//     this._height = value;
//     return;
//   }
//   if (name === 'width') {
//     this._width = value;
//     return;
//   }
// }
function setWidth(value) {
  this._width = value;
}
function setHeight(value) {
  this._height = value;
}

// 예제 2
class Concert {
  // book(customer, isPremium) {}
  regularBook(customer) {}
  premiumBook(customer) {}
  #book(customer, isPremium) {}
}

// 예제 3
// function setSwitch(on);
function switchOn() {}
function switchOff() {}
