class Priority {
  //각각의 우선순위를 인덱스를 할당해 static으로 인스턴스를 만들어 둠으로써 이전에 js파일에서 배열을 순회하면서 인덱스를 찾던걸 개선할 수 있음
  static LOW = new Priority('low', 0);
  static NORMAL = new Priority('normal', 1);
  static HIGH = new Priority('high', 2);
  static RUSH = new Priority('rush', 3);

  private constructor(private name: string, private index: number) {}
  toString(): string {
    return this.name;
  }
  equals(other: Priority) {
    return this.index === other.index;
  }
  higherThan(other: Priority) {
    return this.index > other.index;
  }
  lowerThan(other: Priority) {
    return this.index < other.index;
  }
}
class Order {
  constructor(public priority: Priority) {}
  isHighPriority() {
    return this.priority.higherThan(Priority.NORMAL);
  }
}
const orders = [
  new Order(Priority.NORMAL), //static으로 바로 접근 가능
  new Order(Priority.HIGH),
  new Order(Priority.RUSH),
];
const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
console.log(highPriorityCount);
