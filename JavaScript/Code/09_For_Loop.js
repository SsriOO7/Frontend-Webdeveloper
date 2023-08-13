// Find the sum of first n natural number
const prompt = require("prompt-sync")({ sigint: true});
let sum = 0;
let n = prompt('Enter any natural number');
n = Number.parseInt(n);
for(let i=1; i<=n;i++){
    sum+=i;
}
console.log(sum);
