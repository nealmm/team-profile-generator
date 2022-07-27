const inquirer = require('inquirer')

const managerQuestions = [{type: 'input',  name: 'name',   message: "Enter team manager's name"}
                         ,{type: 'number', name: 'id',     message: "Enter team manager's employee ID"}
                         ,{type: 'input',  name: 'email',  message: "Enter team manager's email address"}
                         ,{type: 'number', name: 'office', message: "Enter team manager's office number"}]

const engineerQuestions = [{type: 'input',  name: 'name',   message: "Enter engineer's name"}
                          ,{type: 'number', name: 'id',     message: "Enter engineer's employee ID"}
                          ,{type: 'input',  name: 'email',  message: "Enter engineer's email address"}
                          ,{type: 'input',  name: 'github', message: "Enter engineer's GitHub username"}]

const internQuestions = [{type: 'input',  name: 'name',   message: "Enter intern's name"}
                        ,{type: 'number', name: 'id',     message: "Enter intern's employee ID"}
                        ,{type: 'input',  name: 'email',  message: "Enter intern's email address"}
                        ,{type: 'input',  name: 'school', message: "Enter intern's school"}]

const menuOptions = ['add an engineer to my team', 'add an intern to my team', 'finish building my team']

function presentMenu() {
    inquirer.prompt([{type: 'list', name: 'option', message: 'Choose an option', choices: menuOptions}])
    .then(choice => {
        switch (choice.option) {
            case menuOptions[0]:
                inquirer.prompt(engineerQuestions).then(() => presentMenu())
                break
            case menuOptions[1]:
                inquirer.prompt(internQuestions).then(() => presentMenu())
                break
            case menuOptions[2]:
                console.log('Generating HTML...')
                break
        }
    })
}

inquirer.prompt(managerQuestions).then(() => presentMenu())