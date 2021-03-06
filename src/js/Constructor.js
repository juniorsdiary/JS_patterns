// Паттерн Конструктор
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.convertToString = function convertToString() {
  return `${this.model} has done ${this.miles} miles`;
};

// Usage:

const civic = new Car('Honda Civic', 2009, 20000);
const mondeo = new Car('Ford Mondeo', 2010, 5000);
