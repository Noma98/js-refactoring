//🌟 예제1
export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === 'unknown'
      ? new UnknownCustomer()
      : new Customer(this._customer);
  }
}
class UnknownCustomer extends Customer {
  get name() {
    return 'occupant';
  }
}
export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // ...
  customerName = aCustomer.name;

  return customerName;
}

//🌟 예제2
class Hotel {
  constructor() {
    this.rooms = [];
  }
  addRoom(roomNumber) {
    this.rooms.push(new Room(roomNumber));
  }
  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = new EmptyRoom(roomNumber);
  }
  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}
class Room {
  constructor(roomNumber) {
    this.roomNumber = roomNumber;
  }
  clean() {
    console.log(`${this.roomNumber} 깨끗하게 청소합시다!`);
  }
}
class EmptyRoom extends Room {
  clean() {
    console.log(`${this.roomNumber} 방이 비어있어요~~`);
  }
}
const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);
hotel.cleanRooms();
hotel.emptyRoom(1);
hotel.cleanRooms();
