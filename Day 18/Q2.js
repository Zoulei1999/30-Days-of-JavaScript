let catNames = [];
let cats = [];
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch (catsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(cats => {
            data.push(cats);
        })
    })
    .catch(error => console.error(error))

if(catNames){
    cats.forEach(cat => {
        catNames.push(cat.name)
    })
    console.log(catNames)
}