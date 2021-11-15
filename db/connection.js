const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ThisIsMyPasswordAndThereIsOnlyOneLikeIt',
        database: 'employeetracker'
    },
    console.log('Connected to the employeetracker database.')
);

// View all departments
const viewAllDpts = () => {
    db.execute(
        `SELECT * FROM departments`,
        function (err, results, fields) {
            console.table('Departments', results);
        }
    );
};

// View all roles
const viewAllRoles = () => {
    db.execute(
        `SELECT roles.id, roles.title, roles.salary, departments.department_name FROM roles
        JOIN departments
        ON roles.department_id = departments.id`,
        function(err, results, fields) {
            console.table('Roles', results);
        }
    );
};

module.exports = {
    db,
    viewAllDpts,
    viewAllRoles
};