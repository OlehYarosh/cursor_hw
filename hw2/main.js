let first_number_N = Number(prompt("Введіть ціле число N:"));
let second_number_M = Number(prompt("Введіть ціле число M:"));

while (!Number.isInteger(first_number_N)){
    first_number_N = Number(prompt("Число N було не ціле, будь-ласка напишіть ціле число:", first_number_N))
}
while (!Number.isInteger(second_number_M)){
    second_number_M = Number(prompt("Число M було не ціле, будь-ласка напишіть ціле число:", second_number_M))
}

const numbers = `Число N: ${first_number_N} ---> Число M: ${second_number_M}`;
console.log(numbers)

let sum = 0;
if (confirm("Чи пропускати парні?") === true) {
    for (let i = first_number_N; i<=second_number_M; i++) {
        if((i % 2) !== 0){
            sum += i;
        }
    } console.log("Сума усіх непарних чисел:", sum)
} else {
    for (let i = first_number_N; i<=second_number_M; i++) {
        sum += i;
    } console.log("Сума усіх чисел :", sum)
}