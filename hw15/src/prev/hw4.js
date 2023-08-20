export function studentsPair(students) {
    const studentsBoy = ["Олександр", "Ігор", "Олексій"];
    const studentsGirl = ["Олена", "Іра", "Світлана"];
    let pairs = [];

    for (let i = 0; i < students.length / 2; i++) {
        let pair = [studentsBoy[i], studentsGirl[i]]
        pairs.push(pair)
    }
    return pairs
}

export function studentsMarks(students, marks) {
    let studentsAssessment = [];
    
    for (let i = 0; i < students.length; i++) {
        let allStudentsMarks = [students[i], marks[i]];
        studentsAssessment.push(allStudentsMarks)
    }
    return studentsAssessment
}   