const mongoose = require('mongoose');

const gameItemSchema = new mongoose.Schema({
    itemName: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    strength: { type: Number, required: true },
    agility: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    ownedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GameProfile' }]
});

const GameItem = mongoose.model('GameItem', gameItemSchema);

module.exports = GameItem;