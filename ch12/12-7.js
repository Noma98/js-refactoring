// 각각의 서브 클래스별로 이용할 만한 다형성이나 유스케이스들이 없다면 그냥 하나의 클래스로 남겨두는 게 나을 때도 있음
// -> 그럴 땐 불필요한 서브 클래스를 제거하고, 외부에서 알 필요 없는 내부 로직들을 캡슐화 해두고, 외부에서 사용하기 쉽게 팩토리 메서드를 제공해줄 수 있음
class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  get isMale() {
    return this.#genderCode === 'M';
  }
  static create(record) {
    switch (record.gender) {
      case 'M':
        return new Person(record.name, 'M');
      case 'F':
        return new Person(record.name, 'F');
      default:
        return new Person(record.name, 'X');
    }
  }
}

function loadFromInput(data) {
  const result = [];
  data.forEach((record) => {
    result.push(Person.create(record));
  });
  return result;
}

const people = loadFromInput([
  { name: '엘리', gender: 'F' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'M' },
]);
const numberOfMales = people.filter((p) => p.isMale).length;
console.log(numberOfMales);
