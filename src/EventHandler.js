// @flow
import type { EventHandlerType } from './types';

function EventHandler<T>(): EventHandlerType<T> {
  const listeners = [];
  function listen(listener: T => void) {
    listeners.push(listener);
  }

  function removeListener(listener: T => void) {
    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i] === listener) {
        listeners.splice(i, 1)
        break;
      }
    }
  }

  function fire(value: T) {
    listeners.forEach((listener: T => void) => {
      listener(value);
    });
  }

  return { listen, removeListener, fire };
}

export default EventHandler;
