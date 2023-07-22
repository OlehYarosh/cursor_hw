const result = document.getElementById('result');
const idGenerator = createIdGenerator();
const fontGenerator = newFontGenerator();

function* createIdGenerator() {
    let id = 1;
    while(true){
        yield id++;
    }
}

function genID() {
    const idElement = document.createElement('p');
    const update = idGenerator.next().value;
    result.innerHTML = ''
    idElement.textContent = `ID: ${update}`;
    result.appendChild(idElement);
    result.classList.add('genID')
}

function* newFontGenerator() {
    let size = 30;
    while (true) {
        const click = yield size;
        if (click === "up") {
            size += 2;
        } else if (click === "down") {
            size -= 2;
        }
    }
}

function sizeUp() {
    const size = fontGenerator.next("up").value;
    result.style.fontSize = `${size}px`;
}
function sizeDown() {
    const size = fontGenerator.next('down').value;
    result.style.fontSize = `${size}px`;
}
