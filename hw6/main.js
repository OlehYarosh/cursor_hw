const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

function getSubjects(students) {
    const subjectsOut = [];

    for(let key in students.subjects){
        key = key.replace('_', ' ').split('')
        key[0] = key[0].toUpperCase();
        subjectsOut.push(key.join(''));
    }
    return subjectsOut
}
console.log("№1 -->", getSubjects(students[0]))

function getAverageMark(students) {
    let allMarks = [];
    let avg = 0;

    for(let marks in students.subjects){
        allMarks.push(...students.subjects[marks])
        avg = allMarks.reduce((sum, i) => sum + i, 0)
    }
    return (avg / allMarks.length).toFixed(2)
}
console.log("№2 -->", getAverageMark(students[0]))

function getStudentInfo(students) {
    return {
        course: students.course,
        name: students.name,
        averageMark: getAverageMark(students)
    }
}
console.log("№3 -->", getStudentInfo(students[0]))

function getStudentsNames(students) {
    const studentsName = []

    for(let names of students) {
        studentsName.push(names.name)
    }
    studentsName.sort();
    return studentsName
}
console.log("№4 -->", getStudentsNames(students))

function getBestStudent(students) {
    let studentsName = null;
    let highAvg = 0;
    
    for(let student of students){
        const averageMark = getAverageMark(student)

        if (averageMark > highAvg){
            highAvg = averageMark;
            studentsName = student.name;
        }
    }
    return studentsName
}
console.log("№5 -->", getBestStudent(students))

function calculateWordLetters(string){
    let lettersCount = {};
    let modifiedString = string.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < modifiedString.length; i++) {
        let letter = modifiedString[i];

        if (lettersCount[letter]){
            lettersCount[letter]++;
        } else {
            lettersCount[letter] = 1;
        }
    }
    return lettersCount
}
console.log("№6 -> Невірний той, хто прощається, коли темніє дорога. - Ґімлі -->", 
calculateWordLetters("Невірний той, хто прощається, коли темніє дорога. - Ґімлі"))
