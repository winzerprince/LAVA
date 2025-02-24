const express = require('express');
const router = express.Router();
const Match = require('../models/match');

// Create a match
router.post('/', async (req, res) => {
    try {
        const match = await Match.create(req.body);
        res.status(201).json(match);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get matches for a user
router.get('/:userId', async (req, res) => {
    try {
        const matches = await Match.findAll({
            where: {
                [Op.or]: [
                    { userId1: req.params.userId },
                    { userId2: req.params.userId }
                ]
            }
        });
        res.json(matches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update match status
router.put('/:matchId', async (req, res) => {
    try {
        const [updated] = await Match.update(req.body, { where: { id: req.params.matchId } });
        if (updated) {
            const updatedMatch = await Match.findByPk(req.params.matchId);
            res.json(updatedMatch);
        } else {
            res.status(404).json({ error: 'Match not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
