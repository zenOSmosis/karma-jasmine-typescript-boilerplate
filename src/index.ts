export function fibonacci(n: number): number[] {
  if (n === 1) {
    return [0, 1];
  } else {
    const s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

export function toUpperCase(str: string) {
  return str.toUpperCase();
}

export function getTime() {
  return new Date().getTime();
}

export function isBrowser() {
  // Note: This isn't a great test; it would be skewed if polyfilled or running
  // in a web / service worker, etc.
  return typeof window !== undefined;
}
