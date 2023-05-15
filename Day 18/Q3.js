let countries;
let languages = [];
let largestCountries = [];
// largestCountries.length = 10;
const url = 'https://restcountries.com/v2/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        countries = data;
        //logging the country name,capital,languages,population
        countries.forEach(country => {
            console.log(`country: ${country.name} capital: ${country.capital} languages: ${country.languages} population: ${country.population} \n`)
        })

        //total number of languages in the world;
        countries.forEach(country => {
            country.languages.forEach(language => {
                if (languages.indexOf(language.name) === -1) {
                    languages.push(language.name)
                }
            })
        })

        //largest countries
        let highestCountry = 0;

        countries.forEach(country => {
            if (country.area >= highestCountry) {
                highestCountry = country.area;
                largestCountries.push(country)
            }
        })
        console.log(`the total number of languages in the world is ${languages.length}`)
    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData();
