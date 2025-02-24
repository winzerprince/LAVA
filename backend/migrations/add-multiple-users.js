const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:mysql@localhost:3306/lava');

const addMultipleUsers = async () => {
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' },
        { username: 'user4', password: 'password4' },
        { username: 'user5', password: 'password5' },
        { username: 'user6', password: 'password6' },
        { username: 'user7', password: 'password7' },
        { username: 'user8', password: 'password8' },
        { username: 'user9', password: 'password9' },
    ];

    try {
        for (const user of users) {
            await sequelize.query(`
                INSERT INTO Users (username, password)
                VALUES ('${user.username}', '${user.password}');
            `);
        }
        console.log('Multiple users added successfully.');
    } catch (error) {
        console.error('Error adding users:', error);
    } finally {
        await sequelize.close();
    }
};

addMultipleUsers();
