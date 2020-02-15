//Soma de multiplos de tres e cinco

let number = 10
let sum = 0

while(number > 1){
    number = number - 1
    if (number%3 === 0 || number%5 === 0)
        sum += number;
}
console.log(sum)