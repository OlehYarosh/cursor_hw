function getRandomChinese(length) {
    return new Promise(async (resolve) => {
        let input = '';
        while (input.length < length) {
            const char = String.fromCharCode(Date.now()).slice(-5);
            input += char;
            await new Promise((resolve) => setTimeout(resolve, 50))
        }
        resolve(input)
    })
}

getRandomChinese(5).then((input) => {
    const result = document.getElementById('result');
    const body = document.querySelector('body');

    result.innerHTML = input;

    result.style.display = 'flex';
    result.style.alignContent = 'center';
    result.style.justifyContent = 'center';
    body.style.backgroundColor = 'rgb(188, 186, 186)'
})