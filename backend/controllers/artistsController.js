// use async package to handle try catches for promises when connecting to db so we can use our error handler
const asyncHandler = require('express-async-handler')
const artistModel = require('../models/artistModel')

// @desc Get Artists
// @route GET /Artists
// @access Private (authentication)
const getArtists = asyncHandler(async (req, res) => {
    const artists = await artistModel.find()
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
        name: req.body.name
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
    const deletedArtist = await artistModel.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedArtist)
})

module.exports = {
    getArtists,
    createArtists,
    updateArtists,
    deleteArtists,
}