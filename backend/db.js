const { Sequelize } = require('sequelize');

// Create a connection to the database
const sequelize = new Sequelize('LAVA', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the MySQL database.');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });

// Sync all models with the database
sequelize.sync()
    .then(() => {
        console.log('All models were synchronized successfully.');
    })
    .catch((err) => {
        console.error('Error synchronizing models:', err);
    });

module.exports = sequelize;
