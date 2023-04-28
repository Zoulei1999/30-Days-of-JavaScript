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
personAccount.accountInfo();
personAccount.addIncome('art', 200);
personAccount.addExpense('pen', 330);
personAccount.accountInfo();

//2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp(name, mail,pw){
    for(const usr of users){
        if(usr.mail == mail){
            return 'User Exists';
        }
    }

    let alps = '123456abhsgesvj2672sa'
    let rand = [];

    for(const chr of '______') {
        let random = parseInt(Math.random()*alps.length);
        rand.push(alps[random]);
    }

    let id = rand.join('');

    const d = new Date();

    let mins = d.getMinutes();
    mins < 10 ? '0' + mins.toString() : mins;
    let hrs = d.getHours();
    hrs < 10 ? '0' + hrs.toString() : hrs;
   
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
  
    let DATE = `${year}/${month+1}/${date}  ${hrs>12? (hrs-12).toString() + ':' + mins.toString() + ' PM': hrs.toString()+':' + mins.toString() + ' AM'}`;

    let userData = {
        _id: id,
        username: name,
        email: mail,
        password: pw,
        createdAt: DATE,
        isLoggedIn: false
    };

    users.push(userData);
}

signUp('Richard', 'Richard@Richard.com', '123456');
console.log(users);

function signIn(mail, pw){
    for(const usr of users){
        if(usr.email == mail && usr.password == pw){
            usr.isLoggedIn = true;
            return "You have logged in";
        }
    }
    return "login failed";
}
console.log(signIn('Richard@Richard.com', '12345'));

//3
function rateProduct(productnum, ID, rate){
    let rating = {'userId': ID, 'rate': rate};
    products[productnum-1].ratings.push(rating);
    console.log(products[productnum-1].ratings);
}

function averageRating(productID){
    let total = 0;
    let prd;

    for(const prod of products){
        if(prod._id == productID){
            prd = prod;
        }
    }

    for(const rate of prd.ratings){
        total = total + rate.rate;
    }

    return (total/prd.ratings.length);
}

console.log(averageRating('eedfcf'));

//4

function likeProduct(ID, productnum){
    let prd = products[productnum-1];
    for(const prod of products){
        if(prod._id == ID){
            prd = prod;
        }
    }
    let index = prd.likes.indexOf(ID)
    if(index){
        prd.likes.push(ID);
    }
    else{
        prd.likes.splice(index,1);
    }
    return prd;
}

console.log(likeProduct('bob', 1));
console.log(likeProduct('bob', 1));
