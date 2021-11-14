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

module.exports = {
    db,
    viewAllDpts
};