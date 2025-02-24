const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

// Create a profile
router.post('/', async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a profile by user ID
router.get('/:userId', async (req, res) => {
    try {
        const profile = await Profile.findOne({ where: { userId: req.params.userId } });
        if (profile) {
            res.json(profile);
        } else {
            res.status(404).json({ error: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a profile
router.put('/:userId', async (req, res) => {
    try {
        const [updated] = await Profile.update(req.body, { where: { userId: req.params.userId } });
        if (updated) {
            const updatedProfile = await Profile.findOne({ where: { userId: req.params.userId } });
            res.json(updatedProfile);
        } else {
            res.status(404).json({ error: 'Profile not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
