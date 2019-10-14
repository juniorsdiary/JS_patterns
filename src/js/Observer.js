// Паттерн Обсервер
// паттерн используется когда необхоимо для разных элементов орагнизоватсь синхронную подписку на события.
// пример чат социальная сеть интернет магазин. При изменнеии состояния или при событии с клиента изменения транслируются другим элементам или клиенту.

function ObserverList() {
  // список обсерверов
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  let i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }

  return -1;
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};

// Next, let's model the Subject and the ability to add, remove or notify observers on the observer list.
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function(context) {
  const observerCount = this.observers.count();
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};

// The Observer

// здесь мы задает поведения для каждого обсервера. При определенном событии может возникать разный ответ на него
function Observer() {
  this.update = function() {
    // ...
  };
}