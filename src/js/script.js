// Паттерн Конструктор
function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

}


// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

// Usage:

var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

console.log( civic.toString() );
console.log( mondeo.toString() );

// Петтерн Модуль
// Служит для создания приватных свойств и методов не доступных из вне
// приватные данные хрянятся в замыкании функции
var myRevealingModule = (function () {

        var privateCounter = 0;

        function privateFunction() {
            privateCounter++;
        }

        function publicFunction() {
            publicIncrement();
        }

        function publicIncrement() {
            privateFunction();
        }

        function publicGetCount(){
          return privateCounter;
        }

       return {
            start: publicFunction,
            increment: publicIncrement,
            count: publicGetCount
        };

    })();

myRevealingModule.start();


// In practice, the Singleton pattern is useful when exactly one object is needed to coordinate others across a system. Here is one example with the pattern being used in this context:
var SingletonTester = (function () {

  // options: an object containing configuration options for the singleton
  // e.g var options = { name: "test", pointX: 5};
  function Singleton( options ) {

    // set options to the options supplied
    // or an empty object if none are provided
    options = options || {};

    // set some properties for our singleton
    this.name = "SingletonTester";

    this.pointX = options.pointX || 6;

    this.pointY = options.pointY || 10;

  }

  // our instance holder
  var instance;

  // an emulation of static variables and methods
  var _static = {

    name: "SingletonTester",

    // Method for getting an instance. It returns
    // a singleton instance of a singleton object
    getInstance: function( options ) {
      if( instance === undefined ) {
        instance = new Singleton( options );
      }

      return instance;

    }
  };

  return _static;

})();

var singletonTest = SingletonTester.getInstance({
  pointX: 5
});

// Log the output of pointX just to verify it is correct
// Outputs: 5
console.log( singletonTest.pointX );


// Паттерн Обсервер
function ObserverList(){
  // список обсерверов
  this.observerList = [];
}

ObserverList.prototype.add = function( obj ){
  return this.observerList.push( obj );
};

ObserverList.prototype.count = function(){
  return this.observerList.length;
};

ObserverList.prototype.get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};

ObserverList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;

  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }

  return -1;
};

ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
};

// Next, let's model the Subject and the ability to add, remove or notify observers on the observer list.
function Subject(){
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function( observer ){
  this.observers.add( observer );
};

Subject.prototype.removeObserver = function( observer ){
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};

Subject.prototype.notify = function( context ){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
};

// We then define a skeleton for creating new Observers. The update functionality here will be overwritten later with custom behaviour.
// The Observer
function Observer(){
  this.update = function(){
    // ...
  };
}
