/*
클래스 하나당 하나의 역할, 하나의 책임, 하나의 도메인만 가지는 것이 좋음 
→ 여러가지 복합적인 데이터와 행동들이 섞여 있다면 다른 클래스로 추출하면 어떨까? 생각해보기
*/
class Person {
  #name;
  // #officeAreaCode;
  // #officeNumber;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    // this.#officeAreaCode = areaCode;
    // this.#officeNumber = number;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    // return `(${this.officeAreaCode}) ${this.officeNumber}`;
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    // return this.#officeAreaCode;
    return this.#telephoneNumber.areaCode;
  }

  // set officeAreaCode(arg) {
  //   this.#officeAreaCode = arg;
  // }

  get officeNumber() {
    // return this.#officeNumber;
    return this.#telephoneNumber.number;
  }

  // set officeNumber(arg) {
  //   this.#officeNumber = arg;
  // }
}
//전화번호 관련된걸 따로 클래스로 파서 그 안에서 포맷 로직도 관리함
class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }
  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }
  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
  }
  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
