// @desc Get Artists
// @route GET /Artists
// @access Private (authentication)
const getArtists = (req, res) => {
    res.json({message: "Get Artists"})
}

// @desc Create Artists
// @route POST /Artists
// @access Private (authentication)
const createArtists = (req, res) => {
    res.json({message: "Create Artists"})
}

// @desc Update Artists
// @route PUT /Artists
// @access Private (authentication)
const updateArtists = (req, res) => {
    res.json({message: "Update Artists ${req.params.id}"})
}

// @desc Delete Artists
// @route DELETE /Artists
// @access Private (authentication)
const deleteArtists = (req, res) => {
    res.json({message: "Delete Artists ${req.params.id}"})
}

module.exports = {
    getArtists,
    createArtists,
    updateArtists,
    deleteArtists,
}