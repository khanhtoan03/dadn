import jwt from "jsonwebtoken"

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"
  if (!token) {
    return res.status(401).json({ error: "Access denied, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user info to the request
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
};

export default authenticateJWT;
