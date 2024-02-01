const express = ('express');
const auth = require('./authRoutes');
const router = express.Router();

router.get(`/api/v1/` , (_req, res) => {
    res.json ({
        "message":"Hello World"
    })
})

router.use(auth)
// other route
module.exports = router;