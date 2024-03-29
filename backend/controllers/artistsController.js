// use async package to handle try catches for promises when connecting to db so we can use our error handler
const asyncHandler = require('express-async-handler')
const artistModel = require('../models/artistModel')
const userModel = require('../models/userModel')

// @desc Get Artists
// @route GET /Artists
// @access Private (authentication)
const getArtists = asyncHandler(async (req, res) => {
    const artists = await artistModel.find({user: req.user.id})
    res.status(200).json(artists)
})

// @desc Create Artists
// @route POST /Artists
// @access Private (authentication)
const createArtists = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a name');
    }
    const Artist = await artistModel.create({
        name: req.body.name,
        genre: req.body.genre,
        user: req.user.id
    })
    res.status(200).json(Artist)
})

// @desc Update Artists
// @route PUT /Artists
// @access Private (authentication)
const updateArtists = asyncHandler(async (req, res) => {

    const uniqueArtist = await artistModel.findById(req.params.id)
    if (!uniqueArtist) {
        res.status(400)
        throw new Error('Artist not found')
    }

    const user = await userModel.findById(req.user.id)

    // check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the artist user
    if (uniqueArtist.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedArtist = await artistModel.findByIdAndUpdate(req.params.id, req.body, 
        {
        new: true,
    })
    res.status(200).json(updatedArtist)
})

// @desc Delete Artists
// @route DELETE /Artists
// @access Private (authentication)
const deleteArtists = asyncHandler(async (req, res) => {

    const uniqueArtist = await artistModel.findById(req.params.id)

    if (!uniqueArtist) {
        res.status(400)
        throw new Error('Artist not found')
    }

    const user = await userModel.findById(req.user.id)

    // check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the artist user
    if (uniqueArtist.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const deletedArtist = await artistModel.findByIdAndRemove(req.params.id)
    res.status(200).json({id: deletedArtist.id})
})

module.exports = {
    getArtists,
    createArtists,
    updateArtists,
    deleteArtists,
}