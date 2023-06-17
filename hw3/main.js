function getMaxDigit(number) {
    const digits = String(number).split('');

    let maxNumber = digits[0];

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] > maxNumber){
            maxNumber = digits[i]
        }
    }
    return maxNumber;
}

function pow(number, step){
    let result = number;
    for (let i = 1; i < step; i++){
        result *= number;
    }
    return result;
}

function validateWord(word) {
    update_word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return update_word;
}

function salaryWithoutTax(sum, tax1, tax2) {
    let tax;
    tax = tax1 + tax2;
    taxWithSum = (sum*tax)/100;
    lastSum = Math.round((sum - taxWithSum)*100)/100;
    return lastSum
}

function getRandomNumber(firstNumber, lastNumber) {
    let number = Math.round((lastNumber - firstNumber) * Math.random(firstNumber, lastNumber) + 1);
    return number
}

function countLetter(anyWord, letter) {
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

function convertCurrency(value) {
    if (value.includes('$')) {
        return Math.round(parseFloat(value) * 36.9) + " UAH"
    } else if (value.toUpperCase().includes('UAH')) {
        return Math.round(parseFloat(value) * 0.02710028) + " $"
    } else {
        return "Ми конвертуємо тільки UAH -> $, або $ -> UAH"
    }
}

function getRandomPassword(passwordLength = 8) {
    password = Math.random()*10
    result = String(password).slice(-passwordLength)
    return result
}

function deleteLetters(sentence, lett) {
    const newSentence = sentence.replaceAll(lett, '');
    return newSentence
}

function isPalyndrom(word) {
    let userWord = word.toLowerCase().replaceAll(' ', '');
    let reverseWord = "";
    for (let i = userWord.length - 1; i >= 0; i--){
        reverseWord += userWord[i];
    }
    if (userWord === reverseWord){
        return true
    } else {
        return false
    }
}


console.log(`
Функція №1: результат числа <23563> = ${getMaxDigit(23563)};
Функція №2: результат виразу <4^4> = ${pow(4, 4)};
Функція №3: результат слова <cUrSoR> = ${validateWord("cUrSoR")};
Функція №4: результат суми податків від зарплати = ${salaryWithoutTax(17643, 10, 5.9)};
Функція №5: результат діапазону між числами <1-100> = ${getRandomNumber(1, 100)};
Функція №6: результат кількості букв <L> у слові <parallelogram> = ${countLetter("parallelogram", "L")};
Функція №7-8: результат конвертації $ -> UAH = ${convertCurrency("100$")}, та UAH -> $ = ${convertCurrency("3690 uAh")};
Функція №9: результат згенерованого паролю в довжину по замовчуванням: ${getRandomPassword()};
Функція №10: результат видалення усіх букв <a> з речення <ababahalamaha>: ${deleteLetters('ababahalamaha', 'a')};
Функція №11: результат перевірки слова/речення чи воно є паліндромом <Я несу гусеня>: ${isPalyndrom('Я несу гусеня')}.
`)