// 예시 1
// 서브 클래스에서 공통된 속성이나 행동을 가지고 있다면, 부모 클래스로 올려주는게 중복을 방지 할 수 있고 공통된 규격을 약속할 수 있음
class Employee {
  get name() {}
}

class Salesperson extends Employee {
  // get name() {}
}

class Engineer extends Employee {
  // get name() {}
}

// 예시 2
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}
class Employee extends Party {}
