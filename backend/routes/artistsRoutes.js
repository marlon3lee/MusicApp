const express = require("express")
const router = express.Router()
const { getArtists,createArtists,updateArtists,deleteArtists } = require("../controllers/artistsController")

// middleware that is specific to this router
/*router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
*/

// get
router.get('/', getArtists)

// create
router.post('/', createArtists)

// update
router.put('/:id', updateArtists)

// delete
router.delete('/:id', deleteArtists)

module.exports = router