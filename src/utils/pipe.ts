import { walk } from './walk';

class Pipe {
  private handlers: Handler<Target>[];
  constructor(...handlers: Handler<Target>[]) {
    this.handlers = handlers;
  }
  run(target: Target) {
    return walk(target, ...this.handlers);
  }
}

export function pipe(...handlers: Handler<Target>[]) {
  return new Pipe(...handlers);
}
