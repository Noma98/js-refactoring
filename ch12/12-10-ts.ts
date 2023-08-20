interface PrinterHeader {
  print(): void;
}
class Printer {
  private printerHeader: PrinterHeader;
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrinterHeader();
  }
  print() {
    this.printerHeader.print();
  }
}
class DefaultPrinterHeader implements PrinterHeader {
  print(): void {
    console.log('기본적인 출력!');
  }
}
class RedPrinterHeader extends PrinterHeader {
  //오버라이딩
  print() {
    console.log('🔴 출력!');
  }
}
class BlackPrinterHeader extends PrinterHeader {
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
