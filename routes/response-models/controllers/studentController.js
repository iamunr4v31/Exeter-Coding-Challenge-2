let students = require('../../../Students')

const getStudents = (_,response) => {
    // GET all students
    response.send(students);
}

const addStudent = (request, response) => {
    // add a new student record
    const {id, name, subject1, subject2, subject3, subject4, subject5} = request.body;
    const student = {
        id,
        name,
        subject1,
        subject2,
        subject3,
        subject4,
        subject5
    };
    students = [...students, student];
    response.code(201).send(student);
}

const updateStudentMark = (request, response) => {
    const {id, ...rest} = request.body; // mark = 'subject1' 100,80
    let student = students.find(o => o.id === id);
    for (let x in rest) {
        student[x] = rest[x];
    }
    response.send(student);
}

const deleteStudentRec = (request, response) => {
    const {id} = request.body;
    student = students.find(o => o.id === id)
    let idx = students.indexOf(student);
    if (idx > -1) {
        students.splice(idx, 1);
    }
    response.send(student)
    console.log(students)
}

module.exports = {
    getStudents,
    addStudent,
    updateStudentMark,
    deleteStudentRec
}