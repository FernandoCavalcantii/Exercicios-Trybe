"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
const Customer_1 = __importDefault(require("./Customer"));
class Order {
    constructor(_customer, _items, _payment, _discount) {
        this._customer = _customer;
        this._items = _items;
        this._payment = _payment;
        this._discount = _discount;
    }
    total() {
        const total = this._items.map(i => i._price);
        console.log(total.reduce((acc, cv) => acc + cv));
    }
    totalWithDiscount() {
        const total = this._items.map(i => i._price);
        console.log(total.reduce((acc, cv) => acc + cv) * this._discount);
    }
}
const hotDog = new Item_1.default('Hot Dog', 10);
const fries = new Item_1.default('Fries', 8);
const customer = new Customer_1.default('Fernando');
const order = new Order(customer, [hotDog, fries], 'Crédito', 0.9);
order.total();
order.totalWithDiscount();
