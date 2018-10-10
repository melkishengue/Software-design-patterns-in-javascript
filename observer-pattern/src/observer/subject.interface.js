import MethodNotOverridenException from '../error/methodNotOverridenException';

export default class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    throw new MethodNotOverridenException('Abstract method. Please override this method');
  }

  detach(observer) {
    throw new MethodNotOverridenException('Abstract method. Please override this method');
  }

  notify() {
    throw new MethodNotOverridenException('Abstract method. Please override this method');
  }
}
