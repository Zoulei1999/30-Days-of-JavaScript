//1
function outerFunction(){
    let count = 0

    function innerFunction(){
        count++
        return count
    }

    return innerFunction
}
const innerfunc = outerFunction()
console.log(innerfunc())

//2
function outerfunction(){
    let count = 0

    function plus(){
        count++
        return count
    }

    function minus(){
        count--
        return count
    }

    return{
        plus:plus(),
        minus:minus()
    }
}

const innerFuncs = outerfunction()

console.log(innerFuncs.plus)
console.log(innerFuncs.minus)

//3

function personAccount(){
    let firstName = 'Richard'
    let lastName = 'Zou'
    let incomes = [500,1000, 200]
    let expenses = [300]

    function addIncome(income){
        incomes.push(income)
        return income
    }

    function addExpense(expense){
        expenses.push(expense)
        return expense
    }

    function totalIncome(){
        let totalIncome = 0
        let totalExpense = 0

        incomes.forEach(income =>{
            totalIncome += income
        })

        expenses.forEach(expenses =>{
            totalExpense += expenses
        })

        let total = totalIncome - totalExpense

        return total
    }

    function totalExpense(){
        let totalE = 0
        expenses.forEach(expense =>{
            totalE += expense
        })

        return totalE
    }

    function accountBalance (){
        return totalIncome()
    }

    function accountInfo(){
        return `name: ${firstName} ${lastName} \nBalance: ${accountBalance()} `
    }

    return {
        addIncome:addIncome(),
        addExpense:addExpense(),
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        accountBalance: accountBalance(),
        accountInfo: accountInfo()
    }
}

const acc = personAccount();
console.log(acc.accountInfo)