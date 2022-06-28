// in addition to Employees properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'


const Manager = require('../lib/Manager.js');

test('creates an employee object', () => {
    const manager = new Manager('Dale', '22', 'racing@dale.com', 'Manager', '555-555-5555');

    expect(manager.name).toBe('Dale');
    expect(manager.id).toBe('22');
    expect(manager.email).toBe('racing@dale.com');
    expect(manager.role).toBe('Manager');
    expect(manager.number).toBe('555-555-5555');
});


