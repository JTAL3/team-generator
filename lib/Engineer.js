// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Employee = require('./Employee');

//cleaning up
class Engineer extends Employee {
    constructor ({name, id, email, role, userName}) {
        super (name, id, email, role);
        this.userName = userName;
    }

    getuserName() {
        return this.userName;
    }

    getRole() {
        return this.role;
    }
}

// class Engineer {
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


module.exports = Engineer;