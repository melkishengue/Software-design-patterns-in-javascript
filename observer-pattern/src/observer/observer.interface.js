import MethodNotOverridenException from '../error/methodNotOverridenException';

export default class Observer {
  constructor() {}

  update() {
    throw new MethodNotOverridenException('Abstract method. Please override this method');
  }
}
