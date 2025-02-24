const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:mysql@localhost:3306/lava');

const createUsersTable = async () => {
    await sequelize.query(`
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
};

createUsersTable()
    .then(() => {
        console.log('Users table created successfully.');
        sequelize.close();
    })
    .catch((error) => {
        console.error('Error creating users table:', error);
        sequelize.close();
    });
