function Button(options) {
  this.width = options.width || 150;
  this.height = options.height || 50;
  this.event = options.event || null
}


function Container(options) {
  this.width = options.width || 150;
  this.height = options.height || 50;
  this.background = options.background || "grey"
}

function ItemFactory() {
  this.domElems = []
}

ItemFactory.prototype.setPrototype = function(itemClass) {
  ItemFactory.prototype.elementClass = itemClass
}

ItemFactory.prototype.createDOMelem = function(options) {

  switch(options.itemType) {
    case "button":
      this.setPrototype(Button);
      break;
    case "container":
      this.setPrototype(Container);
      break;
    }

    let item = new this.elementClass(options)
    this.domElems.push(item)
    return item

}


let domElemFactory = new ItemFactory();

let button = domElemFactory.createDOMelem({
  itemType: "button",
  width: 600,
  height: 200,
  event: function() {
    return `${this.width} ${this.height}`
  }
})
let container = domElemFactory.createDOMelem({
  itemType: "container",
  width: 600,
  height: 200,
  background: "yellow"
})

console.log(button instanceof Button)
console.log(container instanceof Container)
console.log(domElemFactory.domElems)
