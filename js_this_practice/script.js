function Person(name, date, amount) {
    this.name = name;
    this.birthDate = date;
    this.money = amount;
    this.transactionHistory=[`Start count: ${this.amount}`];


    this.getInfo=function(){
        return `Person ${this.name} was born at ${this.birthDate} and has on his account ${this.money} dollars` ;
    }
    this.addMoney=function(amount, comment){
        this.amount += amount;
        this.transactionHistory.push(`${comment}: ${amount}`);

    }
    this.withdrawMoney=function(withdrawAmount, comment){
        this.amount -= withdrawAmount;
        this.transactionHistory.push(`${comment}: -${withdrawAmount}`)

    }
}

let papka = new Person("Sashok", "16.02.1990");


// let papka = {
//     age: 28,
//     name: "Sasha",
//     birthDate: "16.02.1990",
//     money: 100500,
//     getInfo: function () {
//         console.log(`Person ${this.name} was born at ${this.birthDate} and has on his account ${this.money} dollars`)
//     },
//     addMoney: function (addMoney) {
//         let res= addMoney+this.money;
//         console.log(`Money on the bank account of person ${this.name} was increased on ${addMoney} and is ${res} dollars`);
//     },
//     withdrawMoney: function (minusMoney) {
//         let res= this.money-minusMoney;
//         console.log(`Money on the bank account of person ${this.name} was reduced on ${minusMoney} and is ${res} dollars`);
//     }
// };
//
// papka.getInfo();
// papka.addMoney(500);
// papka.withdrawMoney(600);