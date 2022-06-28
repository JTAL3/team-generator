//In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'


const Employee = require('./Employee');

//trying to clean up a bit

    class Intern extends Employee {
        constructor ({name, id, email, school, role}) {
            super (name, id, email, role);
            this.school = school;
        }

        getSchool() {
            return this.school;
        }

        getRole() {
            return this.role;
        }
    }

// class Intern {
//     constructor(name,id,email,role) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.role = role;
//     }

//     getName() {
//         return this.name;
//     }
//     getId() {
//         return this.id;
//     }
//     getEmail() {
//         return this.email;
//     }
//     getRole() {
//         return this.role;
//     }
// }


module.exports = Intern;