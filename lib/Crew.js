const inquirer = require("inquirer");
const { Engineer } = require("./Engineer");
const { Manager } = require("./Manager");
const { Intern } = require("./Intern");
const { templateData } = require("../src/page-template");
const { writeFile } = require("../src/generate-site");

function Start() {
  this.employees = [];

  Start.prototype.askToAdd = function () {
    inquirer
      .prompt({
        type: "list",
        message: "Would you like to add an employee?",
        name: "action",
        choices: ["Yes", "No"],
      })
      .then(({ action }) => {
        if (action === "No") {
            return writeFile(templateData(this.employees));
        } else {
          this.addEmployee();
        }
      });
  };

  Start.prototype.addEmployee = function () {
    inquirer
      .prompt({
        type: "list",
        message: "What position does this employee hold?",
        name: "position",
        choices: ["Manager", "Engineer", "Intern"],
      })
      .then(({ position }) => {
        switch (position) {
          case "Manager":
            this.createManager();
            break;
          case "Engineer":
            this.createEngineer();
            break;
          case "Intern":
            this.createIntern();
            break;
        }
      });
  };

  Start.prototype.createManager = function () {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is the Manager's name?`,
        },
        {
          type: "input",
          name: "email",
          message: `What is the Manager's Email?`,
        },
        {
          type: "input",
          name: "id",
          message: `What is the Manager's employee ID?`,
        },
        {
          type: "input",
          name: "office",
          message: `What is the Manager's office number?`,
        },
      ])
      .then(({ id, name, email, office }) => {
        let newManager = new Manager(id, name, email, office);
        this.employees.push(newManager);
        this.askToAdd();
      });
  };

  Start.prototype.createEngineer = function () {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is the Engineer's name?`,
        },
        {
          type: "input",
          name: "email",
          message: `What is the Engineer's Email?`,
        },
        {
          type: "input",
          name: "id",
          message: `What is the Engineer's employee ID?`,
        },
        {
          type: "input",
          name: "username",
          message: `What is the Engineer's GitHub username?`,
        },
      ])
      .then(({ id, name, email, username}) => {
        let newEngineer = new Engineer(id, name, email, username);
        this.employees.push(newEngineer);
        this.askToAdd();
      });
  };

  Start.prototype.createIntern = function() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the Intern's name?`,
      },
      {
        type: "input",
        name: "email",
        message: `What is the Intern's Email?`,
      },
      {
        type: "input",
        name: "id",
        message: `What is the Intern's employee ID?`,
      },
      {
        type: "input",
        name: "school",
        message: `Where did the intern go to school at?`,
      },
    ])
    .then(({ id, name, email, school }) => {
      let newIntern = new Intern(id, name, email, school);
      this.employees.push(newIntern);
      this.askToAdd();
    });
  }
}

module.exports = {
  Start,
};


// const inquirer = require("inquirer");
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const fs = require('fs');
// const {writeToFile} = require('./src/generate');
// const {filledInfo} = require('../src/temp');

// //begin questionaire after command invoked
// //starting with manager - project requirement
// function myCrew() {
//     this.employees =[];

//     myCrew.prototype.askToAdd = function () {
//         inquirer.prompt({
//             type: "list",
//             name: "Team Builder",
//             message: "Welcome! Adding a team member?",
//             choices: ["Yes", "No"],
//         })

//         .then(({teamBuilder}) => {
//             if(teamBuilder === "No") {
//                 return writeToFile(filledInfo(this.employees));
//             }
//             else {
//                 this.enterEmployee();
//             }
//         });
//     };

//     myCrew.prototype.enterEmployee = function () {
//         inquirer.prompt({
//             type: "list",
//             name: "Role",
//             message: "What role will this employee fill?",
//             choices: ["Manager", "Engineer", "Intern",],
//         })
//         .then(({role}) => {
//             switch (role) {
//                 case "Manager":
//                     this.addManager();
//                     break;
//                     case "Engineer":
//                     this.addEngineer();
//                     break;
//                     case "Intern":
//                     this.addIntern();
//                     break;
                    
//             }
//         });
//     };

//     myCrew.prototype.addManager = function () {
//         inquirer.prompt([
//             {
//               type: "input",
//               name: "Name",
//               message: `Please provide the manager's name.`,
//             },
//             {
//               type: "input",
//               name: "Email",
//               message: `Please provide the manager's work related email address.`,
//             },
//             {
//               type: "input",
//               name: "ID",
//               message: `Please provide the manager's Employee Identification Number.`,
//             },
//             {
//               type: "input",
//               name: "Number",
//               message: `Please provide the manager's office telephone number.`,
//             },
//           ])
//           .then(({ id, name, email, office }) => {
//             let newManager = new Manager(id, name, email, office, role);
//             this.employees.push(newManager);
//             this.askToAdd();
//           });
//       };

//       myCrew.prototype.addIntern = function() {
//         inquirer.prompt([
//           {
//             type: "input",
//             name: "Name",
//             message: `Please provide the intern's name.`,
//           },
//           {
//             type: "input",
//             name: "Email",
//             message: `Please provide the intern's work related email address.`,
//           },
//           {
//             type: "input",
//             name: "ID",
//             message: `Please provide the intern's Employee Identification Number.`,
//           },
//           {
//             type: "input",
//             name: "School",
//             message: `Please provide the intern's place of education.`,
//           },
//         ])
//         .then(({ id, name, email, school }) => {
//           let newIntern = new Intern(id, name, email, school, role);
//           this.employees.push(newIntern);
//           this.askToAdd();
//         });
//       };
    
//       myCrew.prototype.addEngineer = function () {
//         inquirer.prompt([
//             {
//               type: "input",
//               name: "Name",
//               message: `Please provide the engineer's name.`,
//             },
//             {
//               type: "input",
//               name: "Email",
//               message: `Please provide the engineer's work related email address.`,
//             },
//             {
//               type: "input",
//               name: "ID",
//               message: `Please provide the engineer's Employee Identification Number.`,
//             },
//             {
//               type: "input",
//               name: "Username",
//               message: `Please provide the engineer's github username.`,
//             },
//           ])
//           .then(({ id, name, email, username}) => {
//             let newEngineer = new Engineer(id, name, email, username, role);
//             this.employees.push(newEngineer);
//             this.askToAdd();
//           });
//       }
    
      
//     }
    
//     module.exports = {
//       myCrew,
//     };