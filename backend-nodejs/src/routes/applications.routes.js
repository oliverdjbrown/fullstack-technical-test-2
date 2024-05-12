const { Router } = require("express");

const { validateJWT, isAdmin } = require("../middlewares");
const {
  applicationGet,
  applicationByIdGet,
  applicationPost,
  applicationPut,
  applicationDelete,
} = require("../controllers");

const router = Router();

router.get("/", [validateJWT], applicationGet);

router.get("/:id", [validateJWT], applicationByIdGet);

router.post(
  "/",
  [validateJWT],
  applicationPost
);

router.put(
  "/:id",
  [validateJWT],
  applicationPut
);

router.delete(
  "/:id",
  [
    validateJWT,
    isAdmin,
  ],
  applicationDelete
);

module.exports = router;
