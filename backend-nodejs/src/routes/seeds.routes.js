const { Router } = require("express");
const { seedsGet } = require("../controllers");

const router = Router();

router.get('/', seedsGet);

module.exports = router;