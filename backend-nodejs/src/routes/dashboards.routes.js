const { Router } = require("express");

const { validateJWT } = require("../middlewares");
const {
  dashboardGet  
} = require("../controllers");

const router = Router();

router.get("/", [validateJWT], dashboardGet);

module.exports = router;
