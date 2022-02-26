const peopleBtn = document.getElementById('peopleBtn');
const shipsBtn = document.getElementById('shipsBtn');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

class Person {
    constructor(obj) {
        const {name, height, mass, gender, birth_year, homeworld, films} = obj;
        this.name = name;
        this.height = `${height}cm`;
        this.mass = `${mass}kg`;
        this.gender = gender;
        this.birthYear = birth_year;
        this.homeworld = homeworld;
        this.appearances = Array.isArray(films) && films.length || null;
    }
}
class ShipDetails {
    constructor({cost_in_credits, cargo_capacity, passengers, starship_class}) {
        this.cost = cost_in_credits;
        this.cargoCapacity = cargo_capacity;
        this.peopleCapacity = passengers;
        this.class = starship_class;
    }
}
class Ship extends ShipDetails {
    constructor({name, model, manufacturer, cost_in_credits, cargo_capacity, passengers, starship_class}) {
        const obj = {cost_in_credits, cargo_capacity, passengers, starship_class};
        super(obj)
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
    }
}

const memory = {
    url: 'https://swapi.dev/api/',
    currentContext: '',
    people: 'people',
    starships: 'starships',
    data: [],
    previous: null,
    next: null
};

async function getData(url, context) {
    const data = await (await fetch(url)).json()
    memory.currentContext = context;
    return data;
}

function refreshMemory(r, context) {
    memory.previous = r.previous;
    memory.next = r.next;
    memory.data = r.results.map(data => context === memory.people ? new Person(data) : new Ship(data));
    console.log(memory)
}

async function getPeople(url) {
    const data = await getData(url, memory.people);
    refreshMemory(data, memory.currentContext);
}

async function getShips(url) {
    const data = await getData(url, memory.starships);
    refreshMemory(data, memory.currentContext);
}

peopleBtn.addEventListener('click', async () => {
    console.log('button clicked');
    await getPeople(`${memory.url}${memory.people}`);
})
shipsBtn.addEventListener('click', async () => {
    console.log('button clicked');
    getShips(`${memory.url}${memory.starships}`);
})

next.addEventListener('click', async () => {
    console.log('next is clicked');
    if(memory.next) {
        if(memory.currentContext === memory.people) {
            getPeople(memory.next);
        } else if(memory.currentContext === memory.starships) {
            getShips(memory.next);
        }
    }
})

previous.addEventListener('click', async () => {
    console.log('previous is clicked');
    if(memory.previous) {
        if(memory.currentContext === memory.people) {
            getPeople(memory.previous);
        } else if(memory.currentContext === memory.starships) {
            getShips(memory.previous);
        }
    }
})
