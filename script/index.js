const {log } = console;
log('is this thing on?');


// write a function called makeBreakfast

const makeBreakfast = (rawEggs) => {
    const pancakes = rawEggs.results[0];
    localStorage.setItem('char', JSON.stringify(pancakes));
}
const cookBacon = function() {
    const URL = JSON.parse(localStorage.getItem('char')).image;
    document.body.style.backgroundImage = `url(${URL})`;
}

// fetch something
// 3 step process
// go to a url
// get promise
// JSON object

const URL = `https://rickandmortyapi.com/api/character`;

// const shouldHaveStayedOnTheHappyPath = fetch(URL)
// .then(response => response.json())
// .then(eggs => {
//     makeBreakfast(eggs);
//     cookBacon()
// })

async function fetchMyData() {
    const fetchedData = await fetch(URL);
    const jsonifiedFetchData = await fetchedData.json();
    const bacon = makeBreakfast(jsonifiedFetchData);
    cookBacon()
}

fetchMyData()