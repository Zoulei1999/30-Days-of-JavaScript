
function tenMostFrequentWords(string, range){
    let pattern =/[a-z|A-Z][^ ]*/g;
    return Object.entries(string.match(pattern).reduce((dict,word) => {
        dict[word] = (dict[word] || 0) + 1;
        return dict;
    }, {})).sort((a,b) => b[1] - a[1]).slice(0,range);
}

let paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'
console.log(tenMostFrequentWords(paragraph,10))