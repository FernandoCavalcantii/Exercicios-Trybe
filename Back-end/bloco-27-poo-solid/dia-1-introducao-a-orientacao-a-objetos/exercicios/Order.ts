import Item from "./Item";
import Customer from "./Customer";

class Order {
  _customer: Customer;
  _items: Item[];
  _payment: string;
  _discount: number;

  constructor(_customer: Customer, _items: Item[], _payment: string, _discount: number) {
    this._customer = _customer;
    this._items = _items;
    this._payment = _payment;
    this._discount = _discount;
  }

  total(): void {
    const total = this._items.map(i => i._price);
    console.log(total.reduce((acc, cv) => acc + cv));
  }

  totalWithDiscount(): void {
    const total = this._items.map(i => i._price);
    console.log(total.reduce((acc, cv) => acc + cv) * this._discount);
  }
}

const hotDog: Item = new Item('Hot Dog', 10);
const fries: Item = new Item('Fries', 8);
const customer: Customer = new Customer('Fernando');
const order: Order = new Order(customer, [hotDog, fries], 'Crédito', 0.9);
order.total();
order.totalWithDiscount();
