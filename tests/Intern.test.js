//In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'


const Intern = require('../lib/Intern.js');

test('creates an employee object', () => {
    const intern = new Intern('Dale', '22', 'racing@dale.com', 'Intern', 'UNCC');

    expect(intern.name).toBe('Dale');
    expect(intern.id).toBe('22');
    expect(intern.email).toBe('racing@dale.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('UNCC');
});