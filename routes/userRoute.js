const router = require('express').Router();
const userControllers = require("../controllers/userControllers");
// const authMiddleware = require("../middlewares/auth");

// router.use(authMiddleware);
router.post('/api/v1/user/', userControllers.create);
router.get('/api/v1/user/info', userControllers.findAll);
router.put('/api/v1/user/:id', userControllers.update);
router.delete('/api/v1/user/:id', userControllers.delete);
router.get('/api/v1/user/:id', userControllers.findOne);

module.exports = router;