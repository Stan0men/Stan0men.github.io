function Person(name, date, amount) {
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.transactionHistory=[`Start count: ${this.amount}`];

    let getAge = function(){
        const dateParts = date.split('.');
        const birthDate = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
        const diff= Date.now()-birthDate.getTime();
        return Math.abs(new Date(diff).getUTCFullYear()-1970);
    };


    this.getInfo=function(){
        return `Person ${this.name} was born at ${this.birthDate} and has on his account ${this.amount} dollars` ;
    };
    this.addMoney=function(amount, comment){
        this.amount += amount;
        this.transactionHistory.push(`${comment}: ${amount}`);
        return `Person ${this.name} has on his account ${this.amount} dollars and add ${amount} with comment: ${comment}`
    };
    this.withdrawMoney=function(withdrawAmount, comment){
        this.amount -= withdrawAmount;
        this.transactionHistory.push(`${comment}: -${withdrawAmount}`);
        return `Person ${this.name} has on his account ${this.amount} dollars and minus ${withdrawAmount}  with comment: ${comment}`

    }
}

let papka = new Person("Sashok", "16.02.1990", 100500);
console.log(papka.getAge());
//console.log(papka.getInfo());
//console.log(papka.addMoney(500, "Allo"));
//console.log(papka.withdrawMoney(1000, "Ku ku!!!"));
