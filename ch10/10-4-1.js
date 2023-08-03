/**
 * 특정 객체의 타입에 따라 뭔가 동작하게 하려면 switch 타입을 남발하는 것이 아니라 
   객체를 클래스로 만들어 다형성을 이용하도록 하는 것이 좋음
 * switch 문을 남발하면 나중에 새로운 타입이 추가되었을 때 switch문을 하나하나 찾아다니면서 추가하고 유지보수 해야함
 * 하지만 클래스로 만들어 두면, 새로운 새 종류가 생기면 그냥 클래스를 하나 더 만들면 되고, 특정 부분이 문제가 된다면 그 부분만 수정해주면 됨
 */
export function plumages(birds) {
  let map = birds.map((b) => [b.name, b.plumage]);
  let map1 = new Map(map);
  return map1;
}
export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}
class Bird {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  get plumage() {
    return 'unknown';
  }
  get airSpeedVelocity() {
    return null;
  }
}
class EuropeanSwallow extends Bird {
  constructor() {
    super('EuropeanSwallow');
  }
  get plumage() {
    return 'average';
  }
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super('AfricanSwallow');
  }
  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'average';
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  constructor() {
    super('NorwegianBlueParrot');
  }
  get plumage() {
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}
const result = plumages([new NorwegianBlueParrot(), new AfricanSwallow()]);
console.log(result);
