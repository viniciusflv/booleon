// const { performance } = require('perf_hooks');
// const x = Array.from(Array(Math.pow(10, 1))).map((...[,i]) => [`${i}`, () => i]);

// async function perf(cb) {
//   const t1 = performance.now();
//   await new Promise((resolve) => {
//     resolve(cb())
//   })
//   const t2 = performance.now();
//   console.log(t2 - t1);
// }

// function loop(arr, cb) {
//   let i = 0;
//   const l = arr.length;
//   while (i < l) {
//     const cond = cb(arr[i]);
//     if (cond) return cond;
//     i++;
//   }
// }

// perf(() => {
//   const a = loop(x, ([key, cb]) => {
//     if (key.startsWith('999')) {
//       return cb();
//     }
//   });
//   console.log(a)
// });
const match = (a, key) => a === key || a.startsWith(key)

const x =(a) => ({
  [match(a, 'zzz')]: () => `${a}-zzz`,
  [match(a, 'zza')]: () => 'zza',
})[true]

console.log((x('zza_a')()))