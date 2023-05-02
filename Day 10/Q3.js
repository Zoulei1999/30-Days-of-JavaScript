const { countries } = require("./countries_data.js");

let count = new Set(countries.reduce((arr,cur) => {
    arr = arr.concat(cur.languages);
    return arr;
},[])).size;
console.log(count);

//2
let mostspoken = new Set(Object.entries(countries.reduce((langs, obj)=>{
    obj.languages.forEach(lang => langs.push(lang))
    return langs
}, []).reduce((dict, lang) => {
    dict[lang] = (dict[lang] || 0) + 1;
    return dict;
}, {})).sort((a,b) => b[1] - a[1]));

console.log(mostspoken);