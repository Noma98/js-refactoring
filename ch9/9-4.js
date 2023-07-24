/**
 * 참조를 값으로 바꾸기
 *  오브젝트의 특정 속성값이 변해야한다면 참조를 통한 업데이트가 아니라 새로운 값을 반영한 새로운 참조값을 만들어서 재할당해주고, 
 *  참조값의 내부 속성을 set하는 함수를 없애주면 직접 변경할 수 없게 됨
 *  → 값을 변경할 때마다 새로운 오브젝트를 만들면 메모리 낭비 아닌가? 
    : 성능에 전혀 문제가 되지 않는 정도. 미세한 성능 악화보단 안정성 개선 효과가 더 큼
*/

class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name; //값
    this.#telephoneNumber = new TelephoneNumber(areaCode, number); //참조
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    //바로 접근해서 변경할 수 없게 toString 처리를 할 수도 있지만 실수로 누락시킬 가능성이 있음
    // return this.#telephoneNumber.toString;
    return this.#telephoneNumber;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    // this.#telephoneNumber.areaCode = value;
    this.#telephoneNumber = new TelephoneNumber(
      value,
      this.#telephoneNumber.number
    );
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    // this.#telephoneNumber.number = value;
    this.#telephoneNumber = new TelephoneNumber(
      this.#telephoneNumber.areaCode,
      value
    );
  }
}

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
  // set areaCode(arg) {
  //   this.#areaCode = arg;
  // }

  get number() {
    return this.#number;
  }
  // set number(arg) {
  //   this.#number = arg;
  // }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
