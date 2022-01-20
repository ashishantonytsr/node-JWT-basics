const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");

// we add middleware after route '/' and before callback fn (req,res)=>{}
// here callback fn is dashboard, imported from controllers
// so we add middleware before callback fn dashboard

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
