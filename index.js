const inquirer = require('inquirer')
const Manager  = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js')
const Intern   = require('./lib/intern.js')

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
                inquirer.prompt(engineerQuestions).then(answers => {
                    employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
                    presentMenu()
                })
                break
            case menuOptions[1]:
                inquirer.prompt(internQuestions).then(answers => {
                    employees.push(new Intern(answers.name, answers.id, answers.email, answers.school))
                    presentMenu()
                })
                break
            case menuOptions[2]:
                console.log(employees)
                break
        }
    })
}

var employees = []

inquirer.prompt(managerQuestions).then(answers => {
    employees.push(new Manager(answers.name, answers.id, answers.email, answers.office))
    presentMenu()
})