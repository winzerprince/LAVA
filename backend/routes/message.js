const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// Send a message
router.post('/', async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get messages between two users
router.get('/:senderId/:receiverId', async (req, res) => {
    try {
        const messages = await Message.findAll({
            where: {
                [Op.or]: [
                    { senderId: req.params.senderId, receiverId: req.params.receiverId },
                    { senderId: req.params.receiverId, receiverId: req.params.senderId }
                ]
            }
        });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
