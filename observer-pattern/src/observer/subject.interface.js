import MethodNotOverridenException from '../error/methodNotOverridenException';

export default class Subject {
  constructor() {
    this.observers = [];
  }

  notify(payload) {
    this.observers.forEach((observer) => {
      observer.update(payload);
    });
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }
}
