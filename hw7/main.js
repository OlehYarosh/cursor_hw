const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes() {
    const salary = Math.round(Math.random() * ((this.middleSalary+300)-(this.middleSalary-300)) + (this.middleSalary-300))
    return this.tax * salary
}
console.log('№1: Ukraine ->', getMyTaxes.call(ukraine))

function getMiddleTaxes() {
    return this.tax * this.middleSalary
}
console.log('№2: Ukraine ->', getMiddleTaxes.call(ukraine), ' Latvia ->', 
getMiddleTaxes.call(latvia), ' Litva ->', getMiddleTaxes.call(litva))

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies
}
console.log('№3: Litva ->', getTotalTaxes.call(litva))

function getMySalary() {
    let salary = Math.round(Math.random() * (2000-1500) + 1500);
    let taxes = this.tax * salary;
    let profit = salary - taxes;
    return console.log('№4: Latvia ->', {salary, taxes, profit})
}
setInterval(getMySalary.bind(latvia), 10000)