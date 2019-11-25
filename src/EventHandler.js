// @flow
import type { EventHandlerType } from './types';

function EventHandler<T>(): EventHandlerType<T> {
  let listeners = [];
  function listen(listener: T => void) {
    listeners.push(listener);
  }

  function removeListener(listener: T => void) {
    listeners = listeners.filter(element => element !== listener)
  }

  function fire(value: T) {
    listeners.forEach((listener: T => void) => {
      listener(value);
    });
  }

  return { listen, removeListener, fire };
}

export default EventHandler;
