/**
 * name과 annualCost가 공통됨 -> 부모 클래스를 만들어서 공통되는 부분을 재사용
 */
class Party {
  get name() {}
  get annualCost() {}
}
class Department extends Party {
  get headCount() {}
}

class Employee extends Party {
  get id() {}
}
