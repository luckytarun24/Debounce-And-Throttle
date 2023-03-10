const print = (event) => {
  console.log('Yes I am called', event);
};

const debonce = (callback, delay) => {
  let id;
  return function () {
    let context = this;
    let argument = arguments;
    clearTimeout(id);
    id = setTimeout(() => callback.apply(context, argument), delay);
  };
};
const handleKeyUp = debonce(print, 1000);

const throttle = (callback, delay) => {
  let isRunning = false;
  return function (...args) {
    if (isRunning) return;
    callback(...args);
    isRunning = true;
    setTimeout(() => {
      isRunning = false;
    }, delay);
  };
};

const handleOnClick = throttle(print, 1000);
