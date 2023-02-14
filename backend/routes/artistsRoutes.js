const express = require("express")
const router = express.Router()
const { getArtists,createArtists,updateArtists,deleteArtists } = require("../controllers/artistsController")
const { protect } = require("../middleware/authMiddleware")

// middleware that is specific to this router
/*router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
*/

// get
router.get('/', protect, getArtists)

// create
router.post('/', protect, createArtists)

// update
router.put('/:id', protect, updateArtists)

// delete
router.delete('/:id', protect, deleteArtists)

module.exports = router