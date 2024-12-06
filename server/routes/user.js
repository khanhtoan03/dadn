// server/routes/auth.js
import Router from "express";
import authenticateJWT from "../middlewares/authenticateJWT.js"
import User from "../models/User.js";

const router = Router();
// Register Route

router.route("/").get(authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude sensitive info like password
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
