export function getMyTaxes() {
    const salary = Math.round(Math.random() * ((this.middleSalary+300)-(this.middleSalary-300)) + (this.middleSalary-300))
    return this.tax * salary
}
