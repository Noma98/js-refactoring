class Employee {
  // get quota() {} -> SalesPerson에서만 필요하다고 가정하면, 해당 서브 클래스로 내려주기
}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
  //필요한 곳에서만 정의하는 게 좋음.
  //그렇지 않으면 Employee라면 모두 quota라는 규격사항을 따라가야하네? 하고 오해하기 쉬움
}
