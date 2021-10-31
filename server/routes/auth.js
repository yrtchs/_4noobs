const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const { check } = require("express-validator");
const roleMiddleware = require("../middlewares/role.middleware");

router.post(
  "/sign-up",
  [
    check("username", "Username cannot be empty").notEmpty(),
    check(
      "password",
      "Password must be more than 4 and less than 14 characters"
    ).isLength({ min: 4, max: 14 }),
  ],
  authController.signUp
);
router.post("/sign-in", authController.signIn);
router.get("/users", roleMiddleware(["ADMIN"]), authController.getUsers);

module.exports = router;
