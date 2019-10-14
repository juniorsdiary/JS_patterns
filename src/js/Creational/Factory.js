import LogCreateTime from './Constructor';

class FruitsConstructor extends LogCreateTime {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }
}
class VegetablesConstructor extends LogCreateTime {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }
}
class BerriesConstructor extends LogCreateTime {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }
}
class OtherConstructor extends LogCreateTime {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }
}

class FoodFactory {
  static foodItemsList = {
    fruits: FruitsConstructor,
    vegetables: VegetablesConstructor,
    berries: BerriesConstructor,
    other: OtherConstructor,
  };

  create(name, id, type = 'other') {
    return new FoodFactory.foodItemsList[type](id, name);
  }
}

const foodFactory = new FoodFactory();

const food = [
  {
    type: 'vegetables',
    name: 'Carrot',
    cost: 40,
    quantity: 100,
  },
  {
    type: 'vegetables',
    name: 'Onion',
    cost: 10,
    quantity: 0,
  },
  {
    type: 'fruits',
    name: 'Apple',
    cost: 20,
    quantity: 68,
  },
  {
    type: 'fruits',
    name: 'Orange',
    cost: 30,
    quantity: 55,
  },
  {
    type: 'berries',
    name: 'Blueberries',
    cost: 30,
    quantity: 55,
  },
  {
    type: 'berries',
    name: 'Blueberries',
    cost: 30,
    quantity: 55,
  },
  {
    type: 'other',
    name: 'Potato',
    cost: 60,
    quantity: 23,
  },
];

food.map(({ id, name, type }) => foodFactory.create(id, name, type));

console.log(food);
