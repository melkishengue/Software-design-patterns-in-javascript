import { MethodNotOverridenException } from '../error/';

export default class Observer {
  constructor() {}

  update() {
    throw new MethodNotOverridenException();
  }
}
