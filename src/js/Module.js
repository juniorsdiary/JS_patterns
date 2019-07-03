// Петтерн Модуль
// Служит для создания приватных свойств и методов не доступных из вне
// приватные данные хрянятся в замыкании функции

const MyModule = (() => {
  let counter = 0;

  const randomDigits = [];

  return {
    addRandom(rnd) {
      counter++;
      randomDigits.push({ counter, rnd });
      return this;
    },
    getCounter() {
      return randomDigits;
    },
  };
})();
for (let i = 0; i < 10; i++) {
  const rnd = Math.random();
  if (rnd < 0.5) {
    MyModule.addRandom(rnd);
  }
}
console.log(MyModule.getCounter()); // has value
console.log(MyModule.randomDigits); // undefined
