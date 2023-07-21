const filmId = document.getElementById('filmId')
const display = document.getElementById('displayCharter')
const planetsId = document.getElementById('displayPlanets')
const BASE_URL = 'https://swapi.dev/api';
let planetsPage = 0;

function checkF() {
    const id = filmId.value;
    if(id >= 1 && id <= 6){
        display.innerHTML = ''
        fetch(BASE_URL+`/films/${id}`)
        .then(response => response.json())
        .then(data => {
            const char = data.characters;
            char.forEach(charURL => {
                fetch(charURL)
                .then(response => response.json())
                .then(charData => {
                    displayCharter(charData)
                })
            })
        })
        .catch(error => console.log(error))
    } else {
        console.log("Wrong number film")
    }
}

function displayCharter(character) {
    const displayInfo = document.createElement('div')
    displayInfo.classList.add("characters")
    displayInfo.innerHTML = `
    <h2>${character.name}</h2>
    <p>BY: ${character.birth_year}</p>
    <p>Genger: ${character.gender}</p>
    <hr>
    `;

    if(character.gender === "male") {
        displayInfo.classList.add("male");
    } else if(character.gender === "female") {
        displayInfo.classList.add("female");
    } else if(character.gender === "hermaphrodite") {
        displayInfo.classList.add("hermaphrodite")
    } else {
        displayInfo.classList.add("n-a")
    }

    document.getElementById('displayCharter').appendChild(displayInfo);
}

function getPlanets() {
    fetch(BASE_URL + `/planets/?page=${planetsPage}`)
    .then(response => response.json())
    .then(data => {
        const planets = data.results;
        planets.forEach(planet => {
            const planetName = document.createElement('li');
            planetName.textContent = planet.name;
            planetsId.appendChild(planetName);
        })
    })
    .catch(error => {
        console.log(error)
    })
}

function nextPrevButton(action) {
    const min = 1;
    const max = 6;
    if(action === 'next'){
        planetsPage++;
        if(planetsPage > max) {
            planetsPage = min;
        }
    } else if (action === 'prev') {
        planetsPage--;
        if(planetsPage < min) {
            planetsPage = max;
        }
    } else {
        console.log(error)
        return;
    }

    planetsId.innerHTML = '';
    getPlanets()
}
