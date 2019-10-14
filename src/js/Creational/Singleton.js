class Singleton {
  constructor(name) {
    if (Singleton.exists) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    Singleton.exists = true;
    this.name = name;
  }

  getInst() {
    return this.name;
  }
}

console.log('Creating object instance with name option Petya');
const singleTon = new Singleton('Petya');
console.log('Creating another object instance with name option Vlad');
const singleTon2 = new Singleton('Vlad');
console.log(
  'As the result we have single object instance without changes and saving prior settings',
);
console.log(singleTon.name, singleTon2.name); // Petya, Petya
