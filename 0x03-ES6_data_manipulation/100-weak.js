const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let called = weakMap.get(endpoint) || 0;
  called += 1;
  weakMap.set(endpoint, called);

  if (called >= 5) {
    throw new Error('Endpoint load is high');
  }

  return called;
};

export { queryAPI, weakMap };
