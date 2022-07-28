function renderTeamRoster(team) {
    var employees = ''

    team.forEach(x => {employees += renderEmployee(x)})

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Roster</title>
            </head>
            <body>
                <h1>My Team</h1>
                <ul>
                ${employees}
                </ul>
            </body>
            </html>`
}

function renderEmployee(employee) {
    var specialDatum = ''

    switch (employee.getRole()) {
        case 'Manager':
            specialDatum = `Office number: ${employee.getOfficeNumber()}`
            break
        case 'Engineer':
            specialDatum = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`
            break
        case 'Intern':
            specialDatum = `School: ${employee.getSchool()}`
            break
    }

    return `<li>
                <h2>${employee.getName()}</h2>
                <h3>${employee.getRole()}</h3>
                <p>ID: ${employee.getId()}</p>
                <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p>${specialDatum}</p>
            </li>`
}

module.exports = renderTeamRoster