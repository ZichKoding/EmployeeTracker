INSERT INTO departments (department_name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Full-Stack Enginner', '120000', '2'),
    ('FrontEnd Developer', '75000', '2'),
    ('BackEnd Developer', '85000', '2'),
    ('Sales Representative', '50000', '1'),
    ('Lead Sales Representative', '100000', '1'),
    ('Financial Assistant', '65000', '3'),
    ('Acountant', '70000', '3'),
    ('CFO', '200000', '3'),
    ('Chief Lawyer', '200000', '4'),
    ('Lawyer', '120000', '4');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Chris', 'Zichko', '1', '1'),
    ('Ryan', 'Moser', '3',  '1'),
    ('Eric', 'Phillips', '2', '1'),
    ('Cristian', 'Zichko', '2', '3'),
    ('Shirley', 'McClellan', '8', '1'),
    ('Richard', 'Banks', '9', '1'),
    ('Travis', 'Crane', '6', '8'),
    ('Zack', 'Taylor', '7', '5'),
    ('Matt', 'Hillabrand', '4', '10'),
    ('Liam', 'Nelson', '5', '5'),
    ('Gordon', 'Vanhoy', '10', '6');