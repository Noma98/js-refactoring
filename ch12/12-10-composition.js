/**
 * 컴포지션(위임)
    - 동일한 하나의 Printer라는 클래스를 이용해서 전달된 위임에 따라서 다양한 기능을 만들 수 있음
    - 레고를 조립하듯 필요한 기능만 외부로부터 주입받아 활용하는 것
    - 요새는 delegate이라는 용어는 사용하지 않고 무엇에 따라 기능이 바뀌는 지 파악해 의미있는 단어로 전달함
 */
class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }
  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log('기본적인 출력!');
  }
}

class RedPrinterHeader {
  //오버라이딩
  print() {
    console.log('🔴 출력!');
  }
}
class BlackPrinterHeader {
  print() {
    console.log('⚫️ 출력!');
  }
}
const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
]; //Printer에 위임할 수 있는 인스턴스인 delegate를 전달

printers.forEach((printer) => printer.print());
