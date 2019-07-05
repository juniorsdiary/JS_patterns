// In practice, the Singleton pattern is useful when exactly one object is needed to coordinate others across a system. Here is one example with the pattern being used in this context:
const SingletonWrap = (() => {
  // возвращаемыый объект при инициализации экземпляра объекта

  function Singleton(options) {
    options = options || {};

    this.name = options.name;
  }

  // здесь будет храниться экземпляр объекта

  let instance;

  // приватный объект для инизиализации возвращаемого объекта

  const _static = {
    getInstance(options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }

      return instance;
    },
  };

  return _static;
})();

console.log('Creating object instance with name option Petya');
const singleTon = SingletonWrap.getInstance({ name: 'Petya' });
console.log('Creating another object instance with name option Vlad');
const singleTon2 = SingletonWrap.getInstance({ name: 'Vlad' });
console.log(
  'As the result we have single object instance without changes and saving prior settings',
);
console.log(singleTon.name, singleTon2.name); // Petya, Petya
