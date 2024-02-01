
const router = require ("express").Router();
const authControllers = require ("../controllers/authControllers");

router.post("/api/v1/login", authControllers.login);
router.post("/api/v1/register", authControllers.register);
router.post("/api/v1/logout", authControllers.logout);

module.exports = router;