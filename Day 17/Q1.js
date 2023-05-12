//1
localStorage.setItem('firstname', 'Richard')
localStorage.setItem('secondname', 'Zou')
localStorage.setItem('age', 23)
localStorage.setItem('country', 'Ireland')
localStorage.setItem('city', 'Dublin')

let firstname = localStorage.getItem('firstname')
let seceondname = localStorage.getItem('secondname')
let age = localStorage.getItem('age')
let city = localStorage.getItem('city')
let country  = localStorage.getItem('country')

console.log(firstname + ' ' + seceondname + ' ' + age + ' ' + city + ' ' + country)

//2
let student = {
    firstname: 'Richard',
    lastname: 'Zou',
    age: 23,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    country: 'Ireland',
    IsEnrolled: true
}
const UserInfo = JSON.stringify(student, undefined, 4);
let details = localStorage.getItem('student');

console.log(details)

//3
const personAccount = {
    firstname: "Richard",
    lastName: "Zou",
    incomes:{
        work: 50000,
        stocks: 10000
    },
    expenses: {
        rent: 24000,
        bills: 12000,
    },

    totalIncome: function(){
        let total = 0;
        for(const inc of Object.keys(personAccount.incomes)){
            total = total + personAccount.incomes[inc];
        }
        return total;
    },

    totalExpense: function(){
        let total = 0;
        for(const ex of Object.keys(personAccount.expenses)){
            total=  total + personAccount.expenses[ex];
        }
        return total;
    },

    accountBalance: function(){
        let plus = this.totalIncome();
        let minus = this.totalExpense();
        return(plus-minus);
    },

    accountInfo: function(){
        console.log("Name: " + this.firstname + " " + this.lastName);
        console.log("Account Balance: " + this.accountBalance());
    },

    addIncome : function(type, amount) {
        this.incomes[type] = amount;
    },
     
    addExpense : function(type, amount) {
        this.expenses[type] = amount;
    }
}
const acc = JSON.stringify(personAccount, undefined, 4);

console.log(acc)


localStorage.clear()