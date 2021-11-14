const inquirer = require('inquirer');
const { viewAllDpts } = require('../db/connection.js');

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
            if(answers['Initial Question'] === 'View all departments'){
                viewAllDpts();
            };
            return JSON.stringify(answers, null, ' ');
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