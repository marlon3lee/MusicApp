// use async package to handle try catches for promises when connecting to db so we can use our error handler
const asyncHandler = require('express-async-handler')

// @desc Get Artists
// @route GET /Artists
// @access Private (authentication)
const getArtists = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get Artists"})
})

// @desc Create Artists
// @route POST /Artists
// @access Private (authentication)
const createArtists = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({message: "Create Artists"})
})

// @desc Update Artists
// @route PUT /Artists
// @access Private (authentication)
const updateArtists = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Artists ${req.params.id}`})
})

// @desc Delete Artists
// @route DELETE /Artists
// @access Private (authentication)
const deleteArtists = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Artists ${req.params.id}`})
})

module.exports = {
    getArtists,
    createArtists,
    updateArtists,
    deleteArtists,
}