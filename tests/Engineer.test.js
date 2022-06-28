// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'



// begin test code

const Engineer = require('../lib/Engineer.js');

test('creates an employee object', () => {
    const engineer = new Engineer('Dale', '22', 'racing@dale.com', 'Engineer', '@myGithub');

    expect(engineer.name).toBe('Dale');
    expect(engineer.id).toBe('22');
    expect(engineer.email).toBe('racing@dale.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.userName).toBe('@myGithub');
});
