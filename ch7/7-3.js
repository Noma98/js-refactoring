export class Order {
  constructor(data) {
    this.priority = new Priority(data.priority);
  }
  isHighPriority() {
    // return this.priority === 'high' || this.priority === 'rush'; //한 곳에서 관리하니깐 유지보수성도 좋아짐
    return this.priority.higherThan('normal'); //5) priority에 대한 것을 Order에서 Priority로 옮김
  }
}
//1) 0)만으로도 충분하지만 priority에 대한 로직이 과연 Order안에 있는게 맞는가 고민해보자 -> priority를 가지고 좀 더 다양한 작업을 하게 된다면, 기본형 자체를 별도의 클래스로 만들 수 있음
//(절대 모든 기본형을 클래스로 만들라는 것이 아니라, 프로젝트 전반적으로 자주 사용하는 경우에만 클래스로 만들자. )
class Priority {
  #value;
  constructor(value) {
    //-> 3)value를 전달할 때 legalValues 범위 안에 있는지 없는지 확인하도록 하면 됨 -> 타입스크립트를 사용하면 enum으로(또는 static으로) 좀더 쉽게 제한할 수 있음
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`); //생성자 안에서 에러를 던지는 것은 보안에 취약함 -> 좋진 않음
    }
  }
  //4) getter를 만듦
  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }
  higherThan(other) {
    return this.index > other.index;
  }
  //2)아무 문자열이 아닌 주어진 범위 안에 코드 상에 정의된 우선순위만 받을 수 있도록 하고 싶음
  //static으로 범위를 만들어줌
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}
const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  // (o) => 'high' === o.priority || 'rush' === o.priority -> 이게 외부에서 필터링 되고 있는게 문제임
  //0) Order 안에 priority가 있기 때문에 우선순위를 결정하는 로직을 Order 안으로 이동시킴
  (o) => o.isHighPriority() //이렇게 하면 가독성도 올라감
).length;
console.log(highPriorityCount);
