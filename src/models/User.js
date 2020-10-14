const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    accessAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User