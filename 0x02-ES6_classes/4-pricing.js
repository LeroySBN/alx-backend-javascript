import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else { throw TypeError('Amount must be a number'); }
  }

  get currency() { return this._currency; }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else { throw TypeError('Currency must be a Currency'); }
  }

  displayFullPrice() { return `${this._amount} ${this._currency.displayFullCurrency()}`; }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else { throw TypeError('Amount and conversion rate must be numbers'); }
  }
}
