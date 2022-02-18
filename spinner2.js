const delayPeriod = 300;
let delay = 0;
const rotation = 10;
const data = "|/-\\";

for (let r = 1; r <= rotation; r++) {
  for (const i of data) {
    setTimeout(() => {
      process.stdout.write(`\r${i}    `);
    }, delay += delayPeriod);
  }
}
setTimeout(() => {
  process.stdout.write(`\r|    \n`);
},(rotation * 4 * delayPeriod) + delayPeriod);