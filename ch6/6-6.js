/**
 * 아래처럼 작성하면 객체의 참조값이 할당되어 객체의 속성값을 직접 변경할 수 있음
 let defaultOwner = { firstName: '마틴', lastName: '파울러' };
 export function getDefaultOwner() {
   return defaultOwner;
  }
*/

/**
 * 개선 방법 1) spread 연산자로 얕은 복사
 * 단점: 객체 안에 객체가 있으면 그건 또 참조값이 들어가게 되어 그 쪽은 다시 속성값을 직접 변경할 수 있게 됨 -> 한 단계의 얕은 복사가 이루어짐
 let defaultOwner = { firstName: '마틴', lastName: '파울러' };
 export function getDefaultOwner() {
   
   return { ...defaultOwner };
   
  }
*/

//개선 방법 2) 클래스 만들기(다른 프로그래밍 언어에서도 범용적으로 사용하는 방법)
//getter만 있고 setter가 없기 때문에 읽을 수만 있고 수정이 불가능함
class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#firstName = data.lastName;
    this.#lastName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });
export function getDefaultOwner() {
  return defaultOwner;
}
