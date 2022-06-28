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



//begin test code


const Employee = require('../lib/Employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Dale', '22', 'racing@dale.com', 'Employee');

    expect(employee.name).toBe('Dale');
    expect(employee.id).toBe('22');
    expect(employee.email).toBe('racing@dale.com');
    expect(employee.role).toBe('Employee');
});

