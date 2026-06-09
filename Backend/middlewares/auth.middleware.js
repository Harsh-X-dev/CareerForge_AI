import jwt from "jsonwebtoken";
import blacklistTokenModel from "../models/blacklist.model.js";

export const authUser = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Not logged in. Token not provided.",
      });
    }

    const isTokenBlacklisted = await blacklistTokenModel.findOne({
      token,
    });

    if (isTokenBlacklisted) {
      return res.status(401).json({
        message: "Token is not valid.",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (err) {
    console.error(err);

    return res.status(401).json({
      message: "Invalid token.",
    });
  }
};
