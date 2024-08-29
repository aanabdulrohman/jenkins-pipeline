// index.js

export function isTrue() {
  return true;
}

export function sum(a, b) {
  return a + b;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('App is running...');
}
