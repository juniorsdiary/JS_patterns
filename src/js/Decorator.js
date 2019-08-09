function Button(width, height) {
  this.width = width || 100;
  this.height = height || 50;
}

Button.prototype.getOptions = function() {
  console.log(`Width: ${this.width}\nHeight: ${this.height}`);
};

function Decorator(obj) {
  this.obj = obj;
  this.width = this.obj.width;
  this.height = this.obj.height;
}
Decorator.prototype = Object.create(Button.prototype);
Decorator.prototype.constructor = Decorator;

function AddEvent(obj, event) {
  Decorator.call(this, obj);
  this.event = event;
}
AddEvent.prototype = Object.create(Decorator.prototype);
AddEvent.prototype.constructor = AddEvent;

const event = function() {
  console.log('ffff');
};

let btn = new Button(200, 100);
btn.getOptions();

let btnWithEvent = new AddEvent(btn, event);
console.log(btn.event); // undefined
btnWithEvent.event();
