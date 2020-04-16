type callbackHandler<T> = (value: T) => void;

export type EventHandlerType<T> = {
  listen: (listener: callbackHandler<T>) => void;
  removeListener: (listener: callbackHandler<T>) => void;
  fire: callbackHandler<T>;
};

function EventHandler<T>(): EventHandlerType<T> {
  let listeners: Array<callbackHandler<T>> = [];
  function listen(listener: callbackHandler<T>) {
    listeners.push(listener);
  }

  function removeListener(listener: callbackHandler<T>) {
    listeners = listeners.filter(element => element !== listener);
  }

  function fire(value: T) {
    listeners.forEach((listener: callbackHandler<T>) => {
      listener(value);
    });
  }

  return { listen, removeListener, fire };
}

export default EventHandler;
