/**
  코드에서 바로 컬렉션에 접근해서 사용하는 것이 아니라
  컬렉션을 담고 있는 클래스 또는 모듈을 만들어 캡슐화 해주고
  이 컬렉션을 조작할 수 있는 인터페이스(함수)를 만들어 외부에 공개해
  이 인터페이스를 통해서만 컬렉션을 읽고 쓸 수 있도록 만들어야 함
 */
export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses]; //get으로 접근할 수 있게 두는 건 괜찮은데 읽기 전용으로 새로운 배열을 만들어서 리턴.
  }
  // set courses(courses) { //setter는 제거해야 함
  //   this.#courses = courses;
  // }
  addCourse(course) {
    this.#courses.push(course);
  }
  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
// ellie.courses.push(new Course('리팩토링', true)); //읽어온 컬렉션 자체에 마음대로 push, delete...등을 할 수 있음
const course = new Course('리팩토링', true);
ellie.addCourse(course);
console.log(ellie.courses.length);
ellie.removeCourse(course, () => console.log('해당 코스는 없다'));
console.log(ellie.courses.length);
ellie.removeCourse(course, () => console.log('해당 코스는 없다'));
/**
 * console
  1
  0
  해당 코스는 없다
 */
