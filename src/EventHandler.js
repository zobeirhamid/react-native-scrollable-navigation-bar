// @flow
import type { EventHandlerType } from './types';

function EventHandler<T>(): EventHandlerType<T> {
  const listeners = [];
  function listen(listener: T => void) {
    listeners.push(listener);
  }

  function fire(value: T) {
    listeners.forEach((listener: T => void) => {
      listener(value);
    });
  }

  return { listen, fire };
}

export default EventHandler;
