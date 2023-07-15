function memo(f) {
  const cache = new Map();

  return function (n) {
    if (!cache.has(n)) {
      cache.set(n, f(n));
    }

    return cache.get(n);
  };
}

const memoizedFibonacci = memo(function (n) {
  if (n < 2) return n;

  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

console.log(memoizedFibonacci(1000));
