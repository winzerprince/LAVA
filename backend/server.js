const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const profileRoutes = require('./routes/profile');
const messageRoutes = require('./routes/message');
const matchRoutes = require('./routes/match');

const bodyParser = require('body-parser');
const sequelize = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test database connection
app.get('/api/test', async (req, res) => {
    try {
        const result = await sequelize.query('SELECT 1 + 1 AS solution');
        res.json({ solution: result[0][0].solution });
    } catch (error) {
        res.status(500).json({ error: 'Database query failed' });
    }
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/matches', matchRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
