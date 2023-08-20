//상속 -> 수직적인 관계에서 코드를 재사용해나감
/**
 * 문제점
 - 다중 상속이 안됨
 - 각각의 서브 클래스별로 하는 일이 많이 달라질 때쯤 일부 서브 클래스에서는 부모로부터 상속한 속성 및 메서드가 맞지 않는다고 느낄 수 있음 -> 이때 상속은 수정 및 확장이 어려움
  => 컴포지션을 사용하면 됨
 */

class Printer {
  print() {
    console.log('기본적인 출력!');
  }
}
class Network{
  send();
}
class RedPrinter extends Printer {
  //오버라이딩
  print() {
    console.log('🔴 출력!');
  }
}
const printers = [new Printer(), new RedPrinter()];
printers.forEach((printer) => printer.print());
