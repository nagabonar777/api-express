const express =require ('express');
const auth = require('./authRoute');
const user = require('./userRoute');
const kategori = require('./kategoriRoute')
const kategorimapel =require('./kategorimapelRoutes')
const router = express.Router()

router.get(`/api/v1/`, (_req, res) => {
    res.json ({
        "message":"Hello World"
    })
})

router.use(auth)
router.use(user)
router.use(kategori)
router.use(kategorimapel)
// other route
module.exports = router;