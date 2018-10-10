import MethodNotOverridenException from '../error/methodNotOverridenException';

export default class Observer {
  constructor() {
  }

  update() {
    throw new MethodNotOverridenException('Abstract method. Please override this method');
  }

  clear() {
    throw new MethodNotOverridenException('Abstract method. Please override this method');
  }

  draw() {
    throw new MethodNotOverridenException('Abstract method. Please override this method');
  }
}
