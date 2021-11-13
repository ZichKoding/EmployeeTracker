const inquirer = require('inquirer');

function initialQuestion() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'Initial Question',
                message: 'What would you like to do?',
                choices: [
                    'View all departments', 
                    'View all roles', 
                    'View all employees', 
                    'Add a department', 
                    'Add a role', 
                    'Add an employee',
                    'Update an employee role'
                ],

            }
        ])
        .then((answers) => {
            console.log(JSON.stringify(answers, null, '  '));
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error);
            } else {
                console.log(error);
            }
        });
}

module.exports = initialQuestion;