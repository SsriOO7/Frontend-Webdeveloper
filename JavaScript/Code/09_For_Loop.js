// Find the sum of first n natural number
// You have to write this every time in program to use prompt in vs code
const prompt = require("prompt-sync")({ sigint: true});
let sum = 0;
let n = prompt('Enter any natural number');
n = Number.parseInt(n);
for(let i=1; i<=n;i++){
    sum+=i;
}
console.log(sum);
