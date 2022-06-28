// Employee is Parent class of
//other 3 will extend Employee (Engineer, Intern, Manager)

//Employee class will have following properties
// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

class Employee {
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}


module.exports = Employee;