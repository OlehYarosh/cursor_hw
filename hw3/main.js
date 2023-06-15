function task1(number) {
    const digits = String(number).split('');

    let maxNumber = digits[0];

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] > maxNumber){
            maxNumber = digits[i]
        }
    }
    return maxNumber;
}

function task2(number, step){
    let result = number;
    for (let i = 1; i < step; i++){
        result = result * number;
    }
    return result;
}

function task3(word) {
    update_word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return update_word;
}

function task4(sum, tax1, tax2) {
    let tax;
    tax = tax1 + tax2;
    taxWithSum = (sum*tax)/100;
    lastSum = Math.round((sum - taxWithSum)*100)/100;
    return lastSum
}

function task5(firstNumber, lastNumber) {
    let number = Math.round((lastNumber - firstNumber) * Math.random(firstNumber, lastNumber) + 1);
    return number
}

function task6(anyWord, letter) {
    amount = 0;
    anyWord = anyWord.toLowerCase();
    letter = letter.toLowerCase();
    for(i = 0; i < anyWord.length; i++){
        if(anyWord[i] === letter) {
            amount++;
        }
    }
    return amount;
}



console.log(`Функція №1: результат числа <23563> = ${task1(23563)};
Функція №2: результат виразу <4^4> = ${task2(4, 4)};
Функція №3: результат слова <cUrSoR> = ${task3("cUrSoR")};
Функція №4: результат суми податків від зарплати = ${task4(17643, 10, 5.9)};
Функція №5: результат діапазону між числами <1-100> = ${task5(1, 100)};
Функція №6: результат кількості букв <L> у слові <parallelogram> = ${task6("parallelogram", "L")}
`)