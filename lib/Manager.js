// in addition to Employees properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'


const Employee = require('./Employee');

//trying to clean up a bit

    class Manager extends Employee {
        constructor ({name, id, email, number, role}) {
            super (name, id, email, role);
            this.number = number;
        }

        getNumber() {
            return this.number;
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


module.exports = Manager;