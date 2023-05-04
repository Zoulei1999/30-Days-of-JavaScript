const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence) {
    let pattern = /[%|@|#|$|\^|&|;|\\?]/g
    let clean = sentence.replace(pattern,'');
    return clean;
}

function MostFrequentWords(string, range){
    let pattern =/[a-z|A-Z][^ ]*/g;
    return Object.entries(string.match(pattern).reduce((dict,word) => {
        dict[word] = (dict[word] || 0) + 1;
        return dict;
    }, {})).sort((a,b) => b[1] - a[1]).slice(0,range);
}

console.log(MostFrequentWords((cleanText(sentence))))

