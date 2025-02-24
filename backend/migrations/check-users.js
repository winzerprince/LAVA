const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:mysql@localhost:3306/lava');

const checkUsers = async () => {
    try {
        const [results, metadata] = await sequelize.query("SELECT * FROM Users;");
        console.log('Users:', results);
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        await sequelize.close();
    }
};

checkUsers();
