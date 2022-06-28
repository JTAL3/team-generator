


const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "Your team has been generated!",
      });
    });
  });
};

module.exports = { writeFile };


// const createTeam = (team) => {
//     console.log(team);
//     //empty array to push html elements and loop team data
//     const html = [];
//     //make functions for each employee type

//     const addManager = (manager) => {
//     console.log(manager);
//     let showManager = `
//     <div class="card" style="width: 15rem;">
//             <div class="card-header">
//            ${manager.name} <br/>
//            <i class="fas fa-mug-hot"></i>Manager</div>
//            <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${manager.id}</li>
//             <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
//             <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
//             </ul>
//         </div> `;
//         html.push(showManager);
// }

// const addEngineer = (engineer) => {
//     console.log(engineer);
//     let showEngineer = `
//     <div class="card" style="width: 15rem;">
//             <div class="card-header">
//            ${engineer.name} <br/>
//            <i class="fas fa-mug-hot"></i>Engineer</div>
//            <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${engineer.id}</li>
//             <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
//             <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.username}">${engineer.username}</a></li>
//             </ul>
//         </div>`;
//         html.push(showEngineer);
// }
// const addIntern = (intern) => {
//     console.log(intern);
//     let showIntern = `
//     <div class="card" style="width: 15rem;">
//             <div class="card-header">
//            ${intern.name} <br/>
//            <i class="fas fa-mug-hot"></i>Engineer</div>
//            <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${intern.id}</li>
//             <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
//             <li class="list-group-item">School: ${intern.school}</li>
//             </ul>
//         </div>`;
//         html.push(showIntern);
// }


// //employees index
// //
// for (let i=0; i<team.length;i++) {
//     if(team[i].getRole() === "Manager") {
//         addManager(team[i]);
//     }
    
//     if(team[i].getRole() === "Intern") {
//         addIntern(team[i]);
//     }

//     if(team[i].getRole() === "Engineer") {
//         addEngineer(team[i]);
//     }
// }

// return html.join('');
// }


