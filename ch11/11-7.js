/**
 * 객체나 클래스를 모델링 할 때 데이터가 읽기만 가능한지 쓰기도 가능한지를 고려해서 캡슐화를 잘해야 함.
 * 쓰기만 가능하면 세터를 제거하고, 값을 쓸 때 유효성 검사가 필요하면 세터를 이용해야함
 */
class Person {
  get name() {}
}
