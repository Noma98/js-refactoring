const customerRepository = new CustomerRepository();

const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId) //도메인 Order 클래스는 repository 디펜던시를 가지지 않고 도메인에 관련된 로직만 가질 수 있음
);
class Order {
  constructor(number, customer) {
    this._number = number;

    //1) customer를 값으로 사용하게 되면 예전 이름을 계속 간직하게 됨
    // this._customer = new Customer(data.customerId);

    //2) Order와 같은 도메인 안에서 무거운 repository를 디펜던시를 가지는 건 좋지 않음
    // this._customer = customerRepository.registerCustomer(data.customerId);
    this._customer = customer;
  }
  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  //프로젝트내 고객 데이터에 대한 정보를 가짐
  //id 별로 고유한 인스턴스 사용 가능
  #customers;

  constructor() {
    this.#customers = new Map();
  }
  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }
  findCustomer(id) {
    return this.#customers.get(id);
  }
}
