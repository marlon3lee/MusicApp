const mongoose = require('mongoose')

const artistSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please add a text value']
    },
    genre : {
        type: String,
    }
})

module.exports = mongoose.model('Artist', artistSchema)