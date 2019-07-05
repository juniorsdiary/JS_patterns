const Commander = (function(){
  
  let value = 0;

  let calc = {

    add: ( val ) => value+=val,

    subtract: ( val) => value-=val,

    multiply: ( val ) => value*=val,

    divide: (val) => value/=val

  };

  return {
    execute: function(cmd) {
      return calc[cmd].apply(calc, [].slice.call(arguments, 1))
    }
  }

})();

console.log(Commander);
console.log(Commander.execute("add", 10));
console.log(Commander.execute("subtract", 5));
console.log(Commander.execute("multiply", 10));
console.log(Commander.execute("divide", 5));
