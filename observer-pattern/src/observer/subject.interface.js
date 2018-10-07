import MethodNotOverriden from '../error/methodNotOverriden';

export default class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    throw new MethodNotOverriden('Abstract method. Please override this method');
  }

  detach(observer) {
    throw new MethodNotOverriden('Abstract method. Please override this method');
  }

  notify() {
    throw new MethodNotOverriden('Abstract method. Please override this method');
  }
}
