const mongoose = require('mongoose')

const artistSchema = mongoose.Schema({
    // adding user model to artist model
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name : {
        type: String,
        required: [true, 'Please add a name']
    },
    genre : {
        type: String,
        required: [true, 'Please add a genre']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Artist', artistSchema)