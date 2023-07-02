export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() { return this._brand; }

  get motor() { return this._motor; }

  get color() { return this._color; }

  set brand(brand) { this._brand = brand; }

  set motor(motor) { this._motor = motor; }

  set color(color) { this._color = color; }

  cloneCar() {
    const Car = this.constructor;
    return new Car(this._brand, this._motor, this._color);
  }
}
