let students = require('../../../Students')

const getStudents = (_,response) => {
    // GET all students
    response.send(students);
}

const addStudent = (request, response) => {
    // add a new student record
    const {studentID, studentName, subject1, subject2, subject3, subject4, subject5} = request.body;
    const student = {
        studentID,
        studentName,
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
    const {studentID, ...rest} = request.body; // mark = 'subject1' 100,80
    let student = students.find(o => o.studentID === studentID);
    for (let x in rest) {
        student[x] = rest[x];
    }
    response.send(student);
}

const deleteStudentRec = (request, response) => {
    const {studentID} = request.body;
    student = students.find(o => o.studentID === studentID)
    let studentIDx = students.indexOf(student);
    if (studentIDx > -1) {
        students.splice(studentIDx, 1);
    }
    response.send(student)
    // console.log(students)
}

module.exports = {
    getStudents,
    addStudent,
    updateStudentMark,
    deleteStudentRec
}