/**
 * 개발하면서 필드나 메서드를 내리고 올려줄 수 있지만, 
   처음부터 어떤 클래스가 필요한지,
          이것들의 공통적인 속성과 행동은 무엇인지, 
          공통 규격사항, 인터페이스는 뭐가 있는지,
          extends를 해야 하는지 interface를 사용해야 하는지,
          아니면 abstract 클래스를 만드는 게 더 명확할지,
          다 아니고 composition을 사용하는 게 맞는 건지
   를 잘 따져보고 설계하는 것이 베스트임👍 
 */

class Employee {
  // #quota;
}

class Engineer extends Employee {}
class Salesperson extends Employee {
  #quota;
}
