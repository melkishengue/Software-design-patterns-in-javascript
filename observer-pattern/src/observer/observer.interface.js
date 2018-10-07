import MethodNotOverriden from '../error/methodNotOverriden';

export default class Observer {
  constructor() {
  }

  update() {
    throw new MethodNotOverriden('Abstract method. Please override this method');
  }

  clear() {
    throw new MethodNotOverriden('Abstract method. Please override this method');
  }

  draw() {
    throw new MethodNotOverriden('Abstract method. Please override this method');
  }
}
