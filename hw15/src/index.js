import { studentsPair, studentsMarks } from "./prev/hw4";
import { getStudentInfo } from './prev/hw6';
import { getMyTaxes } from './prev/hw7';
import soulImg from '../assets/soul.jpg';
import '../styles/style.css'

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const marks = [4, 5, 5, 3, 4, 5];
const studentsHw6 = [{
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
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

console.log('HW №4 -->', studentsPair(students))
console.log('HW №4 -->', studentsMarks(students, marks))
console.log('HW №6 --> №3 -->', getStudentInfo(studentsHw6[0]))
console.log('HW №7 --> №1: Ukraine ->' , getMyTaxes.call(ukraine))

const image = document.getElementById('image');
image.src = soulImg;