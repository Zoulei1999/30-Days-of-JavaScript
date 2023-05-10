class statistics{
    constructor(arr){
        this.arr = arr
    }

    count(){
        return this.arr.length;
    }

    sum(){
        return this.arr.reduce((sum, value) => sum + value,0)
    }

    min(){
        return this.arr.reduce((min, val) => {
            min = min < val ? min: val;
            return min;
        })
    }

    max(){
        return this.arr.reduce((max, val) => {
            max = max < val ? val: max;
            return max;
        })
    }

    range(){
        return Math.abs(this.max() - this.min());
    }

    mean(){
        return Math.round(this.sum()/this.arr.length);
    }

    median(){
        let sorted = this.arr.sort((a,b) => a-b);
        let len = sorted.length;
        if(len%2 == 0){
            return (sorted[parseInt(len/2)] +sorted[parseInt(len/2)-1]);
        }
        else return (sorted[parseInt(len/2)]);
    }

    mode(){
        return Object.entries(this.arr.reduce((obj, cur)=> {
            obj[cur] = (obj[cur] || 0) +1;
            return obj;
        }, {})).sort((a,b) => a[1] - b[1]).pop()
    }

    var(){
        const average = this.mean();
        const squareDiffs = ages.map(value => {
            const diff = value - average;
            return diff * diff;
        });
        const varience = squareDiffs.reduce((sum, current)=> sum + current)/ages.length;
        return varience;
    }

    std(){
        return Math.sqrt(this.var());
    }
}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let stats = new statistics(ages);

console.log('Count:', stats.count()) // 25
console.log('Sum: ', stats.sum()) // 744
console.log('Min: ', stats.min()) // 24
console.log('Max: ', stats.max()) // 38
console.log('Range: ', stats.range()) // 14
console.log('Mean: ', stats.mean()) // 30
console.log('Median: ',stats.median()) // 29
console.log('Mode: ', stats.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',stats.var()) // 17.5
console.log('Standard Deviation: ', stats.std()) // 4.2

class PersonAccount{
    constructor(FirstName, LastName, Balance, income, expense){
        this.FirstName = FirstName;
        this.LastName = LastName;
    
        this.Balance = 0;
        this.income = [50001,5220,24122];
        this.expense = [6000,1100,4521];
    }

    totalIncome() {
        return this.income.reduce((sum, cur) => sum + cur,0);
    }

    totalExpense(){
        return this.expense.reduce((sum, cur) => sum + cur,0);
    }

    checkBalance(){
        return this.Balance = this.totalIncome() - this.totalExpense();
    }

    withDraw(bal) {
        if (bal > 0 && this.accountBalance > 0) {
          this.accountBalance -= bal;
        }
    } 

    AccountInfo(){
        return `
            ******Account Info******
            Name: ${this.FirstName} ${this.LastName}
            Income: ${this.totalIncome()}
            Expense: ${this.totalExpense()}
            Balance: ${this.checkBalance()}
        `
    }

    set addIncome(income){
        if(income > 0){
            this.income.push(income);
        }
    }
    set addExpense(expense){
        if(expense > 0){
            this.expense.push(expense);
        }
    }
    set deposit(bal) {
        if (bal > 0) this.accountBalance += bal;
    }
}

let acc = new PersonAccount('Richard', 'Zou');
console.log(acc.AccountInfo());