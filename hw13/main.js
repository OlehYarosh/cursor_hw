const result = document.getElementById('result');

function* createIdGenerator() {
    let id = 1;
    while(true){
        yield id++;
    }
}

const idGenerator = createIdGenerator();

function genID() {
    result.innerHTML = ''
    const update = idGenerator.next().value;
    const idElement = document.createElement('p');
    idElement.textContent = `ID: ${update}`;
    result.appendChild(idElement);
}


//-------------------------------------------------------------------------------------------------


function* newFontGenerator() {
    let size = 14;
    while (true) {
        const click = yield size;
        if (click === "up") {
            size += 2;
        } else if (click === "down") {
            size -= 2;
        }
    }
}

const fontGenerator = newFontGenerator();

function sizeUp() {
    const size = fontGenerator.next("up").value;
    result.style.fontSize = `${size}px`;
}
function sizeDown() {
    const size = fontGenerator.next('down').value;
    result.style.fontSize = `${size}px`;
}
