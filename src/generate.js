const createTeam = (team) => {
    console.log(team);
    //empty array to push html elements and loop team data
    const html = [];
    //make functions for each employee type

    const addManager = (manager) => {
    console.log(manager);
    let showManager = `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${manager.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div> `;
        html.push(showManager);
}

const addEngineer = (engineer) => {
    console.log(engineer);
    let showEngineer = `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${engineer.name} <br/>
           <i class="fas fa-mug-hot"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.username}">${engineer.username}</a></li>
            </ul>
        </div>`;
        html.push(showEngineer);
}
const addIntern = (intern) => {
    console.log(intern);
    let showIntern = `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fas fa-mug-hot"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>`;
        html.push(showIntern);
}


//employees index
//
for (let i=0; i<team.length;i++) {
    if(team[i].getRole() === "Manager") {
        addManager(team[i]);
    }
    
    if(team[i].getRole() === "Intern") {
        addIntern(team[i]);
    }

    if(team[i].getRole() === "Engineer") {
        addEngineer(team[i]);
    }
}

return html.join('');
}




module.exports = team => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="./style.css" />
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header>
            <h1>My Team</h1>
            </header>
    
            <main> ${createTeam(team)} </main>
        
        </body>
        </html>`;
    }



// function generateMarkdown(data) {
//     return `# ${data.Title}
  
//     ## Badges
//     ${pullBadge(data.license)}
  
//     ## Table of Contents
//     * [License](#Lice
//     ## Usage:
//     ${data.Usage}
  
//     ## Contributing:
//     [Contributor Covenant](https://www.contributor-covenant.org/)  
//     ${data.Contributing}
  
//     ## Tests:
//     ${data.Tests}
  
//     ## License:
//     ${pullSection(data.license)}
  
//     ## Questions? Feel free to reach out directly at:
//     [${data.Github}](https://github.com/${data.Github})
  
//     ## I can also be reached at:
//     ${data.Email}
    
    
//   `;
    
//   }
  
//   module.exports = generateMarkdown;
  