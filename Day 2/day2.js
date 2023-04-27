//1
let challenge = '30 Days of JavaScript';
//2
console.log(challenge);
//3
console.log(challenge.length);
//4
console.log(challenge.toUpperCase());
//5
console.log(challenge.toLowerCase());
//6
console.log(challenge.substring(3,21));
//7
console.log(challenge.substring(0,3));
//8
console.log(challenge.includes('Script'));
//9
console.log(challenge.split());
//10
console.log(challenge.split(' '));
//11
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(','));
//12
console.log(challenge.replace('JavaScript', 'Python'));
//13
console.log(challenge.charAt(15));
//14
console.log(challenge.charCodeAt('J'));
//15
console.log(challenge.indexOf('a'));
//16
console.log(challenge.lastIndexOf('a'));
//17
let word = 'You cannot end a sentence with because because because is a conjunction';
console.log(word.indexOf('because'));
//18
console.log(word.lastIndexOf('because'));
//19
console.log(word.search('because'));
//20
console.log(challenge.trim(' '));
//21
console.log(challenge.startsWith(3));
//22
console.log(challenge.endsWith('t'));
//23
console.log(challenge.match('a'));
//24
let num = 30
console.log(num + " Days "+  "Of " + "JavaScript");
//25
console.log(challenge.repeat(2));


//2.1
console.log("Question 2.1\n")
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");
console.log("----------------------------\n")

//2.2
console.log("Question 2.2\n")
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same \-\- with charity you give love, so don't just give money but reach out your hand instead.\"");
console.log("----------------------------\n")

//2.3
console.log("Question 2.3\n")
let sum = '10'
if(typeof(sum)== 10){
    console.log('Equal');
}else{
    console.log(sum = 10);
}
console.log("----------------------------\n")

//2.4
console.log("Question 2.4\n")
sum = '9.8'
if(parseFloat(sum)== 10){
    console.log('Equal');
}else{
    console.log(sum = 10);
}
console.log("----------------------------\n")

//2.5
console.log("Question 2.5\n")
let words = 'Python';
console.log(words.search('on'));
words = 'Jargon';
console.log(words.search('on'));
console.log("----------------------------\n")

//2.6
console.log("Question 2.6\n")
word = "I hope this course is not full of jargon."
console.log(word.search('jargon'));
console.log("----------------------------\n")

//2.7
console.log("Question 2.7\n")
console.log(Math.floor(Math.random()* 101));
console.log("----------------------------\n");

//2.8
console.log("Question 2.8\n")
console.log(Math.floor(Math.random()* (101,50) + 50));
console.log("----------------------------\n");

//2.9
console.log("Question 2.9\n")
console.log(Math.floor(Math.random()* 255));
console.log("----------------------------\n")

//2.10
console.log("Question 2.10\n")
let js = 'JavaScript';
let randomIndex = Math.floor(Math.random() * (js.length - 1));
console.log(js[randomIndex]);
console.log("----------------------------\n")

//2.11
console.log("Question 2.11\n")
console.log("1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n  4 1 4 16 64 \n 5 1 5 25 125");
console.log("----------------------------\n")

//2.12
console.log("Question 2.12\n")
worda = 'You cannot end a sentence with because because because is a conjunction';
console.log(worda.substring(31,54));
console.log("----------------------------\n")


//3.1
console.log("Question 3.1\n")
love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern = /love/gi
let loveCount = love.match(pattern).length;
console.log(loveCount);
console.log("----------------------------\n")

//3.2
console.log("Question 3.2\n")
let because = 'You cannot end a sentence with because because because is a conjunction';
pattern = /because/gi
let bcount = because.match(pattern).length;
console.log(bcount);
console.log("----------------------------\n")

//3.3
console.log("Question 3.3\n")
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let per = /%/gi;
let dol = /\$/gi;
let at = /@/gi;
let and = /&/gi;
let Qmark = /\?/gi;
let semi = /;/gi;
let Xmark = /!/gi;
let hash = /\#/gi;
console.log(sentence.replace(per,'').replace(dol,'').replace(at,'').replace(and,'').replace(Qmark,'').replace(semi,'').replace(Xmark,'').replace(hash,''));
console.log("----------------------------\n")

//3.4
console.log("Question 3.4\n")
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let pat = /\d+/g

inc = text.match(pat);

inc1 = parseInt(inc[0])
inc2 = parseInt(inc[1])
inc3 = parseInt(inc[2])

Aincome = inc1 + inc2 + inc3;

console.log("Bobs annual income is €" + Aincome);
console.log("----------------------------\n")