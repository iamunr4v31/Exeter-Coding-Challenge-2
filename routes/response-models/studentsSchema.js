const {getStudents, addStudent, updateStudentMark, deleteStudentRec} = require("./controllers/studentController")


const Student = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        subject1: {
            type: 'string',
        },
        subject2: {
            type: 'string',
        },
        subject3: {
            type: 'string',
        },
        subject4: {
            type: 'string',
        },
        subject5: {
            type: 'string',
        },
    },
}

const getStudentsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Student,
            }
        }
    },
    handler: getStudents,
}

const postStudentOpts = {
    schema: {
        response: {
            201: Student
        }
    },
    handler: addStudent,
}

const updateStudentOpts = {
    schema: {
        response: {
            200: Student
        }
    },
    handler: updateStudentMark
}

const deleteStudentOpts = {
    schema: {
        response: {
            201: Student
        }
    },
    handler: deleteStudentRec
}

module.exports = {
    getStudentsOpts,
    postStudentOpts,
    updateStudentOpts,
    deleteStudentOpts
}