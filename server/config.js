import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const { MONGO_URI, JWT_SECRET } = process.env;

export const mongoURI = MONGO_URI;
export const jwtSecret = JWT_SECRET;