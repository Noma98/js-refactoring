/**
 * 특정 클래스의 인스턴스를 만들 때 생성자를 호출하는 방식이 복잡하다면,
   생성자 로직을 캡슐화하여 외부에서는 바로 생성자를 호출하지 않고 팩토리 함수를 간편하게 사용할 수 있음
 * 다른 언어에서는 private constructor를 쉽게 만들 수 있지만, javascript는 불가능함
 * 팩토리 함수: 객체를 리턴하는 함수 -> static으로 create... 라는 네이밍으로 new 클래스명(a,b,..)을 리턴
   꼭 create을 접두가로 붙일 필요는 없지만, 명확하게 함수의 의도를 전달할 수 있음
 */
export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }
  static createEngineer(name) {
    return new Employee(name, 'E');
  }
  static createSeniorEngineer(name) {
    return new Employee(name, 'SE');
  }
  static createMarketer(name) {
    return new Employee(name, 'M');
  }
}
// const employee = new Employee('noma', 'E');
const employee = Employee.createEngineer('noma');
