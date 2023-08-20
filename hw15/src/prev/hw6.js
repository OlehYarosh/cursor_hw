export function getStudentInfo(studentsHw6) {
    return {
        course: studentsHw6.course,
        name: studentsHw6.name,
        averageMark: getAverageMark(studentsHw6)
    }
}

function getAverageMark(studentsHw6) {
    let allMarks = [];
    let avg = 0;

    for(let marks in studentsHw6.subjects){
        allMarks.push(...studentsHw6.subjects[marks])
        avg = allMarks.reduce((sum, i) => sum + i, 0)
    }
    return (avg / allMarks.length).toFixed(2)
}