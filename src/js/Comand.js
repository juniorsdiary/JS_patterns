const Commander = (function() {
  let value = 0;

  const calc = {
    add: val => (value += val),

    subtract: val => (value -= val),

    multiply: val => (value *= val),

    divide: val => (value /= val),
  };

  return {
    execute(cmd, ...args) {
      return calc[cmd](...args);
    },
  };
}());

console.log(Commander);
console.log(Commander.execute('add', 10));
console.log(Commander.execute('subtract', 5));
console.log(Commander.execute('multiply', 10));
console.log(Commander.execute('divide', 5));
