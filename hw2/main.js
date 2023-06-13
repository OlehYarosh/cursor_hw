let firstNumberN = Number(prompt("Введіть ціле число N:"));
let secondNumberM = Number(prompt("Введіть ціле число M:"));

while (!Number.isInteger(firstNumberN)){
    firstNumberN = Number(prompt("Число N було не ціле, будь-ласка напишіть ціле число:", firstNumberN))
}
while (!Number.isInteger(secondNumberM)){
    secondNumberM = Number(prompt("Число M було не ціле, будь-ласка напишіть ціле число:", secondNumberM))
}

const numbers = `Число N: ${firstNumberN} ---> Число M: ${secondNumberM}`;
console.log(numbers)

let sum = 0;
if (confirm("Чи пропускати парні?") === true) {
    for (let i = firstNumberN; i<=secondNumberM; i++) {
        if((i % 2) !== 0){
            sum += i;
        }
    } console.log("Сума усіх непарних чисел:", sum)
} else {
    for (let i = firstNumberN; i<=secondNumberM; i++) {
        sum += i;
    } console.log("Сума усіх чисел :", sum)
}
