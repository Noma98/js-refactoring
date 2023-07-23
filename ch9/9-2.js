//클래스 또는 객체 안에 있는 필드의 이름은 중요하기 때문에 정확하게 의도나 값을 나타낼 수 있는 단어로 지정해야 함
class Organization {
  #name;
  #country;
  constructor(data) {
    //private field는 _이 아닌 # 문법 사용하기
    this.#name = data.name;
    this.#country = data.country;
  }
  get title() {
    return this.#name;
  }
  set title(value) {
    this.#name = value;
  }
  get country() {
    return this.#country;
  }
  set country(value) {
    this.#country = value;
  }
}
const organization = new Organization({
  name: '드림코딩',
  country: '대한민국',
});
