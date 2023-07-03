class Student {
    constructor(university, course, name) {
        this.university = university,
        this.course = course,
        this.name = name,
        this.marks = [5, 4, 4, 5],
        this.dismised = false,
        this.initialMarks = [...this.marks]
    }

    getInfo() {
        return `Студент ${this.course}-го курсу, ${this.university}, ${this.name}`
    }

    get mark() {
        return this.marks
    }

    set markUpdate(mark) {
        this.marks.push(mark)
    }

    getAverageMark(){
        const sum = this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return sum / this.marks.length
    }

    dismis(){
        this.dismised = true
        this.marks = null
    }

    recover(){
        this.dismised = false
        this.marks = [...this.initialMarks]
    }
}

class BudgetStudent extends Student {
    constructor(university, course, name) {
        super(university, course, name)
        this.interval = setInterval(() => {
            this.getScholarship()
        }, 30000)
    }
    
    getScholarship() {
        if (this.getAverageMark() >= 4.0) {
            console.log(`Студент ${this.name} отримує 1400 грн. стипендії`);
        } else if (this.dismised) {
            console.log(`Студент ${this.name} відрахований`);
        } else {
            console.log(`Студент ${this.name} не отримує стипендії, оскільки його середній бал < 4`);
        }        
    }
}

const newStudent = new Student('Львівський національний університет імені Івана Франка', 4, 'Іван Якович Франко')
console.log(newStudent.getInfo())
console.log(`Бали студента ${newStudent.name}: ${newStudent.mark}`)
newStudent.markUpdate = 5;
console.log(`Оновлені бали студента ${newStudent.name}: ${newStudent.mark}`)
console.log(`Середній бал студента: ${newStudent.getAverageMark()}`)

newStudent.dismis()
console.log(`Студента ${newStudent.name} відраховано, його/її поточні бали ${newStudent.mark}`)
newStudent.recover()
console.log(`Студента ${newStudent.name} поновлено, його/її поточні бали ${newStudent.mark}`)

const budgetStudent = new BudgetStudent('Львівський національний університет імені Івана Франка', 4, 'Іван Якович Франко')