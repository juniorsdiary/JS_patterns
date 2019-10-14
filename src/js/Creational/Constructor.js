class LogCreateTime {
  constructor() {
    this.date = new Date();

    this.create();
  }

  create() {
    console.log(`Creating new instance with given constructor ${this.constructor.name}`);
  }

  logCreateTime() {
    console.log('Date', this.date);
  }
}

export default LogCreateTime;
