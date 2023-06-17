const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function studentsPair(students) {
    const studentsBoy = ["Олександр", "Ігор", "Олексій"];
    const studentsGirl = ["Олена", "Іра", "Світлана"];
    let pairs = [];

    for (let i = 0; i < students.length / 2; i++) {
        let pair = [studentsBoy[i], studentsGirl[i]]
        pairs.push(pair)
    }
    return pairs
}

const studentsPairs = studentsPair(students);
console.log(studentsPairs)

function pairsAndThemes(studentsPairs, themes) {
    let studentsPairsAndThemes = [];

    for (let i = 0; i < themes.length; i++) {
        let pair = studentsPairs[i];
        let pairAndTheme = [pair[0] + ' і ' + pair[1], themes[i]];
        studentsPairsAndThemes.push(pairAndTheme);
    }
    return studentsPairsAndThemes
}

const studentsPairsAndThemes = pairsAndThemes(studentsPairs, themes)
console.log(pairsAndThemes(studentsPairs, themes))

function studentsMarks(students, marks) {
    let studentsAssessment = [];
    
    for (let i = 0; i < students.length; i++) {
        let allStudentsMarks = [students[i], marks[i]];
        studentsAssessment.push(allStudentsMarks)
    }
    return studentsAssessment
}

console.log(studentsMarks(students, marks))

function pairsAndThemesAndMakrs(studentsPairsAndThemes) {
    let studentsPairThemesAndMarks = [];
    let newMarks = []

    for (let i = 0; i < 3; i++) {
        const grade = Math.floor((Math.random() * (5 - 1)) + 1);
        newMarks.push(grade)
    }

    for (let i = 0; i < studentsPairsAndThemes.length; i++){
        let newArr = [...studentsPairsAndThemes[i], newMarks[i]]
        studentsPairThemesAndMarks.push(newArr)
    }
    return studentsPairThemesAndMarks
}

console.log(pairsAndThemesAndMakrs(studentsPairsAndThemes))
