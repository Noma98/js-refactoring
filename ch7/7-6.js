/*
export class TrackingInformation {
  //단순히 정보를 감싸고 있고 별도로 TrackingInformation만을 위한 로직을 담고 있지는 않음
  //함께 묶여야할 정보를 여기저기에 다른 클래스로 추출하고 있음
  //오히려 분리해둬서 바로 접근할 수 없고 전달전달 해줘야함 -> 이 경우 인라인 해주는 것이 좋음(밀접하게 연관되어 있는 데이터와 행동을 하나로 묶기)
  
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }
  
  get shippingCompany() {
    return this.#shippingCompany;
  }
  
  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }
  
  get trackingNumber() {
    return this.#trackingNumber;
  }
  
  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }
  
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}
*/
export class Shipment {
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }
  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }
}

const shipment = new Shipment(999, 'Maersk');
console.log(shipment.trackingInfo);

shipment.shippingCompany = 'COSCO';
console.log(shipment.trackingInfo);
