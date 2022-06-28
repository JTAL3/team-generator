const { myCrew } = require('./lib/Crew')

new myCrew().askToAdd();



//having to rework
const startManager = () => {
    return inquirer.prompt([
     {
        type: "input",
        name: "Name",
        message: "Please enter your name."
    },
    {
        type: "input",
        name: "ID",
        message: "Please enter your employee identification number."
    },
    {
    type: "input",
    name: "Email",
    message: "Please enter your work email address."
    },
    {
    type: "input",
    name: "Number",
    message: "Please enter your work number."
    },
    
    ])

    .then(response => {
        console.log(response);
        const manager= new Manager(response.name, response.idEmployee, response.emailEmployee, response.number);
        team.push(manager);
        startOptions();
    })
};

const startOptions = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "Role",
            message: "Select the employees role.",
            choices: ["Manager, Engineer, Intern"],
            validate: roleEmployee => {
                if(roleEmployee) {
                   return true;
            }
                else {
                   console.log("You must enter the employee's role!");
                   return false;
            }
        }
        }, 
    ])
};





const employeeDetails = [{

    type: "input",
    name: "Name",
    message: "Enter the employee name.",
        validate: nameEmployee => {
            if(nameEmployee) {
                return true;
            }
            else {
                console.log("You must enter a name!");
                return false;
            }
        }
}, 

{
    type: "input",
    name: "ID",
    message: "Enter employee identification number.",
        validate: idEmployee => {
            if(idEmployee) {
                return true;
         }
            else {
                console.log("You must enter an identification number!");
                return false;
            }
        }
}, 

{
    type: "input",
    name: "Email",
    message: "Please provide employee email address.",
        validate: emailEmployee => {
             if(emailEmployee) {
                return true;
         }
             else {
                console.log("You must enter the employee email address!");
                return false;
         }
     }
},


{
    type: "list",
    name: "Role",
    message: "Select the employees role.",
    choices: ["Manager, Engineer, Intern"],
    validate: roleEmployee => {
        if(roleEmployee) {
           return true;
    }
        else {
           console.log("You must enter the employee's role!");
           return false;
    }
}
}, 
 

];



// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userResponse) => {
        return writeToFile()
    })
}
