const blockDivs = document.querySelector('.blocks')
const body = document.querySelector('body')

function generateColors () {
    const symbols = '0123456789ABCDEF';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
        colors += symbols[Math.floor(Math.random()*16)]
    }
    return colors
}

function generateBlocks() {
    const blockSize = 50;
    const rows = 5;
    const cols = 5;
    
    blockDivs.style.display = 'grid';
    blockDivs.style.justifyContent = 'center';
    blockDivs.style.gridTemplateColumns = `repeat(${cols}, ${blockSize}px)`;
    blockDivs.style.gridTemplateRows = `repeat(${rows}, ${blockSize}px)`;
    blockDivs.innerHTML = '';
    body.style.backgroundColor = 'darkgrey';
    
    for (let i = 0; i < rows * cols; i++) {
      const block = document.createElement('div');
      block.style.height = `${blockSize}px`;
      block.style.width = `${blockSize}px`;
      block.style.background = generateColors();
      blockDivs.appendChild(block);
    }
}

function generateBlocksInterval() {
    generateBlocks();
    setInterval(generateBlocks, 1000)
}
generateBlocksInterval()