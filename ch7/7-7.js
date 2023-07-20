class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }
  get manager() {
    return this.#department.manager;
  }
  get chargeCode() {
    return this.#department.chargeCode;
  }
  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person('Tom', new Department('aManager', '999'));
/*
문제점: 내부적으로 사용하고 있는 정보(department)를 지나치게 외부에 노출시킴
특정 클래스 내부에서 위임해서 사용한다면(=가지고 있다면), 외부에서 사용할 때도 직접적으로 사용하게 하는 것이 아니라 가지고 있는 것을 숨길 수 있도록 만들어야함

*위임: has a 관계로, 클래스 내에서 위임 관계에 있는 클래스의 인스턴스를 가지고 있는 상태를 말함
*/
console.log(person.name);
// console.log(person.department.manager);
console.log(person.manager);
// console.log(person.department.chargeCode);
console.log(person.chargeCode);
