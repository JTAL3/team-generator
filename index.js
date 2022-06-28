const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writeToFile = require('./src/generate');

//begin questionaire after command invoked
//starting with manager - project requirement
function runApp() {
    this.employees =[];

    runApp.prototype.askToAdd = function () {
        inquirer.prompt({
            type: "list",
            name: "Team Builder",
            message: "Welcome! Adding a team member?",
            choices: ["Yes", "No"],
        })

        .then(({teamBuilder}) => {
            if(teamBuilder === "No") {
                return writeToFile(filledInfo(this.employees));
            }
            else {
                this.enterEmployee();
            }
        });
    };

    runApp.prototype.enterEmployee = function () {
        inquirer.prompt({
            type: "list",
            name: "Role",
            message: "What role will this employee fill?",
            choices: ["Manager", "Engineer", "Intern",],
        })
        .then(({role}) => {
            switch (role) {
                case "Manager":
                    this.addManager();
                    break;
                    case "Engineer":
                    this.addEngineer();
                    break;
                    case "Intern":
                    this.addIntern();
                    break;
                    
            }
        });
    };

    runApp.prototype.addManager = function () {
        inquirer
          .prompt([
            {
              type: "input",
              name: "Name",
              message: `Please provide the manager's name.`,
            },
            {
              type: "input",
              name: "Email",
              message: `Please provide the manager's work related email address.`,
            },
            {
              type: "input",
              name: "ID",
              message: `Please provide the manager's Employee Identification Number.`,
            },
            {
              type: "input",
              name: "Number",
              message: `Please provide the manager's office telephone number.`,
            },
          ])
          .then(({ id, name, email, office }) => {
            let newManager = new Manager(id, name, email, office, role);
            this.employees.push(newManager);
            this.askToAdd();
          });
      };

      runApp.prototype.addIntern = function() {
        inquirer
        .prompt([
          {
            type: "input",
            name: "Name",
            message: `Please provide the intern's name.`,
          },
          {
            type: "input",
            name: "Email",
            message: `Please provide the intern's work related email address.`,
          },
          {
            type: "input",
            name: "ID",
            message: `Please provide the intern's Employee Identification Number.`,
          },
          {
            type: "input",
            name: "School",
            message: `Please provide the intern's place of education.`,
          },
        ])
        .then(({ id, name, email, school }) => {
          let newIntern = new Intern(id, name, email, school, role);
          this.employees.push(newIntern);
          this.askToAdd();
        });
      };
    
      runApp.prototype.addEngineer = function () {
        inquirer
          .prompt([
            {
              type: "input",
              name: "Name",
              message: `Please provide the engineer's name.`,
            },
            {
              type: "input",
              name: "Email",
              message: `Please provide the engineer's work related email address.`,
            },
            {
              type: "input",
              name: "ID",
              message: `Please provide the engineer's Employee Identification Number.`,
            },
            {
              type: "input",
              name: "Username",
              message: `Please provide the engineer's github username.`,
            },
          ])
          .then(({ id, name, email, username}) => {
            let newEngineer = new Engineer(id, name, email, username, role);
            this.employees.push(newEngineer);
            this.askToAdd();
          });
      }
    
      
    }
    
    module.exports = {
      runApp,
    };
    

    
    const buildTeam = () => {
        console.log('FINISHED BUILDING YOUR TEAM!');
        fs.writeFileSync(outputPath, generateSite(teamMembers));
    }
    promptManager();














//having to rework
// const startManager = () => {
//     return inquirer.prompt([
//      {
//         type: "input",
//         name: "Name",
//         message: "Please enter your name."
//     },
//     {
//         type: "input",
//         name: "ID",
//         message: "Please enter your employee identification number."
//     },
//     {
//     type: "input",
//     name: "Email",
//     message: "Please enter your work email address."
//     },
//     {
//     type: "input",
//     name: "Number",
//     message: "Please enter your work number."
//     },
    
//     ])

//     .then(response => {
//         console.log(response);
//         const manager= new Manager(response.name, response.idEmployee, response.emailEmployee, response.number);
//         team.push(manager);
//         startOptions();
//     })
// };

// const startOptions = () => {
//     return inquirer.prompt([
//         {
//             type: "list",
//             name: "Role",
//             message: "Select the employees role.",
//             choices: ["Manager, Engineer, Intern"],
//             validate: roleEmployee => {
//                 if(roleEmployee) {
//                    return true;
//             }
//                 else {
//                    console.log("You must enter the employee's role!");
//                    return false;
//             }
//         }
//         }, 
//     ])
// };






// const employeeDetails = [{

//     type: "input",
//     name: "Name",
//     message: "Enter the employee name.",
//         validate: nameEmployee => {
//             if(nameEmployee) {
//                 return true;
//             }
//             else {
//                 console.log("You must enter a name!");
//                 return false;
//             }
//         }
// }, 

// {
//     type: "input",
//     name: "ID",
//     message: "Enter employee identification number.",
//         validate: idEmployee => {
//             if(idEmployee) {
//                 return true;
//          }
//             else {
//                 console.log("You must enter an identification number!");
//                 return false;
//             }
//         }
// }, 

// {
//     type: "input",
//     name: "Email",
//     message: "Please provide employee email address.",
//         validate: emailEmployee => {
//              if(emailEmployee) {
//                 return true;
//          }
//              else {
//                 console.log("You must enter the employee email address!");
//                 return false;
//          }
//      }
// },


// {
//     type: "list",
//     name: "Role",
//     message: "Select the employees role.",
//     choices: ["Manager, Engineer, Intern"],
//     validate: roleEmployee => {
//         if(roleEmployee) {
//            return true;
//     }
//         else {
//            console.log("You must enter the employee's role!");
//            return false;
//     }
// }
// }, 
 

// ];



// // function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then((userResponse) => {
//         return writeToFile()
//     })
// }
