/**
 1번 방식 - 백엔드와 통신해서 주고 받는 데이터라 JSON 타입으로 주고 받아서 이미 오브젝트 형태로 되어 있거나, 외부 모듈(라이브러리)에서 객체 형태로 데이터를 반환한다면 뭉탱이로 data를 인자로 전달해도 됨
 class Organization {
  #data;
  #name;
  #country;
  constructor(data) {
    this.#data=data;
    this.#name = data.name;
    this.#country = data.country;
  }
  get name() {
    return this.#name;
  }
  get country() {
    return this.#country;
  }
  get rawData(){
    return {...this.#data}; //얕은 복사 -> 확실한 불변성을 원한다면 lodash의 cloneDeep을 사용
    //만약 setter를 이용해 값을 할당할 수 있다면 이런식으로 리턴하면 위험함
    //return {name:this.name, country:this.country};처럼 해줘야함
  }
}
 const organization = new Organization({
   name: 'Acme Gooseberries',
   country: 'GB',
 });
*/
class Organization {
  #name;
  #country;
  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }
  get name() {
    return this.#name;
  }
  get country() {
    return this.#country;
  }
}
//방식2 - 프로젝트 내부적으로 사용할 때는 2번 방식이 효율적임
const organization = new Organization('Acme Gooseberries', 'GB');

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
