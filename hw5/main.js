//-------------------------------------------------------------------------------------------------------------------------------1
function getRandomArray(length, min, max) {
    let arr = [];
    for(let i = 0; i < length; i++){
        let newArr = Math.round((Math.random() * (max - min)) + min);
        arr.push(newArr)
    }
    return arr
}
console.log("№1 ->", getRandomArray(15, 1, 100))

//-------------------------------------------------------------------------------------------------------------------------------3
function getAverage(...numbers) {
    let result = 0;
    let count = 0;
    for(let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            result = result + numbers[i]
            count++;
        }
    }
    return result / count
}
console.log("№3 ->", getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 1.324))

//-------------------------------------------------------------------------------------------------------------------------------5
function filterEvenNumbers(...numbers) {
    const filter = numbers.filter(number => number % 2 !==0)
    return filter
}
console.log("№5 ->", filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9))

//-------------------------------------------------------------------------------------------------------------------------------6
function countPositiveNumbers(...numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0) {
            count++
        }
    }
    return count
}
console.log("№6 ->", countPositiveNumbers(-5, 10, -3, 7, -2, 15, -8, 12, -1, 20))

//-------------------------------------------------------------------------------------------------------------------------------7
function getDividedByFive(...numbers) {
    let result = []
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 5 === 0){
            result.push(numbers[i])
        }
    }
    return result
}
console.log("№7 ->", getDividedByFive(34, 10, 87, 56, 23, 43, 65, 91, 75, 19, 38, 54, 29, 70, 82))

//-------------------------------------------------------------------------------------------------------------------------------8
function replaceBadWords(string) {
    const splitString = string.split(" ")
    let result = []
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].includes('shit')) {
            result.push(splitString[i].replace('shit', '****'))
        } else if (splitString[i].includes('fuck')){
            result.push(splitString[i].replace('fuck', '****'))
        } else {
            result.push(splitString[i])
        }
    }
    return result.join(" ")
}
console.log("№8 ->", 
replaceBadWords("Holy shit!"), 
replaceBadWords("It's bullshit!"), 
replaceBadWords("Are you fucking kidding?"))

//-------------------------------------------------------------------------------------------------------------------------------9
function divideByThree(word) {
    word = word.toLowerCase().replace(' ', '')
    const syllables = []
    for (let i = 0; i < word.length; i += 3) {
        const syllablesLength = word.substring(i, i+3)
        
        if (syllablesLength.length === 3 || syllablesLength.length < 3) {
            syllables.push(syllablesLength)
        }
    }
    return syllables
}
console.log("№9 ->", 
divideByThree("Commander"), 
divideByThree("live"))
