const { countries } = require("./countries_data");
//1.a
/*let sortname = countries.map(c => c.name)
console.log(sortname)
*/
//1.b
/*let sortbyCapital = countries.sort((a,b) => a.capital.localeCompare(b.capital));
console.log(sortbyCapital);
*/
//1.c
/*
let sortbyPop = countries.sort((a,b) => b.population - a.population);
console.log(sortbyPop);
*/
//2
/*
let mostspoken = Object.entries(countries.reduce((langs, obj)=>{
    obj.languages.forEach(lang => langs.push(lang))
    return langs
}, []).reduce((dict, lang) => {
    dict[lang] = (dict[lang] || 0) + 1;
    return dict;
}, {})).sort((a,b) => b[1] - a[1]);

console.log(mostspoken);
*/
//3
/*
function mostPopulatedCountries(arr, size){
    let sortedpop = []
    let sortbyPop = arr.sort((a,b) => b.population - a.population);;
    for(let i = 0; i < size; i++){
        sortedpop[i] = (sortbyPop[i].name + " " + sortbyPop[i].population);
    }
    return sortedpop;
}
console.log(mostPopulatedCountries(countries,10));
*/
//4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {
}

statistics.count = function() {
    return ages.length
}
statistics.sum = function(){
    let sum = 0;
    ages.forEach(num => sum += num);
    return sum;
}
statistics.min = function(){
    let min = ages[0];
    for(let i = 0 ; i < ages.length; i++){
        if(min > ages[i]){
            min = ages[i]
        }
    }
    return min;
}
statistics.max = function(){
    let max = ages[0];
    for(let i = 0 ; i < ages.length; i++){
        if(max < ages[i]){
            max = ages[i]
        }
    }
    return max;
}
statistics.range = function(){
    let min = ages[0];
    for(let i = 0 ; i < ages.length; i++){
        if(min > ages[i]){
            min = ages[i]
        }
    }
    let max = ages[0];
    for(let i = 0 ; i < ages.length; i++){
        if(max < ages[i]){
            max = ages[i]
        }
    }
    return max - min
}
statistics.mean = function(){
    let sum = 0;
    ages.forEach(num => sum += num);

    return Math.round(sum/ages.length);
}
statistics.median = function(){
    let sort = ages.sort();
    let half = Math.floor(ages.length/2)
    
    return sort[half];
}
statistics.mode = function(){
    let bestStreak = 1;
    let bestElem = ages[0];
    let currentstreak = 0;
    let curretElem = ages[0];

    for(i = 1; i < ages.length;i++){
        if(ages[i-1] !== ages[i]){
            if(currentstreak > bestStreak){
                bestStreak = currentstreak;
                bestElem = curretElem;
            }
            currentstreak = 0;
            curretElem = ages[i];
        }
        currentstreak++;
    }
    return "'mode' : " + bestElem + "'count: '" + bestStreak;
}
statistics.var = function(){
    const average = statistics.mean();
    const squareDiffs = ages.map(value => {
        const diff = value - average;
        return diff * diff;
    });
    const varience = squareDiffs.reduce((sum, current)=> sum + current)/ages.length;
    return varience;
}
statistics.std = function(){
    return Math.sqrt(statistics.var())
}
statistics.freqDist = function(target){
    let counter = 0;
    let age = [];
    for (age of ages) {
        if (age == target) {
            counter++;
        }   
    }
    return "'target : '" + target  + "'Frequency: '" + counter;
    

}


console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum())
console.log('Min: ', statistics.min())
console.log('Max: ', statistics.max())
console.log('Range: ', statistics.range())
console.log('Mean: ', statistics.mean())
console.log('Median: ',statistics.median())
console.log('Mode: ', statistics.mode())
console.log('Variance: ',statistics.var())
console.log('Standard Deviation: ', statistics.std())
console.log('Frequency Distribution: ',statistics.freqDist(26))
