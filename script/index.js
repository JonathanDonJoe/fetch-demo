const {log } = console;
log('is this thing on?')

// write a function called makeBreakfast
// log(eggs)

const makeBreakfast = (bacon) => {
    // log(bacon.image)
    const URL = bacon.image
    document.body.style.backgroundImage = `url(${URL})`
}


const prepareBreakfast = (rawEggs) => {
    const pancakes = rawEggs.results[0];
    localStorage.setItem('char', pancakes.name)
    // const oatMeal = localStorage.getItem('char')
    // log(pancakes)
    makeBreakfast(pancakes)

}




// fetch something
// 3 step process
// go to a url
// get promise
// JSON object

const URL = `https://rickandmortyapi.com/api/character`;
const shouldHaveStayedOnTheHappyPath = fetch(URL)
.then(response => response.json())
.then(eggs => {
    prepareBreakfast(eggs)
})


