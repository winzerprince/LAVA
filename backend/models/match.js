const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Match = sequelize.define('Match', {
    userId1: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId2: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
        defaultValue: 'pending'
    }
}, {
    timestamps: true
});

module.exports = Match;
