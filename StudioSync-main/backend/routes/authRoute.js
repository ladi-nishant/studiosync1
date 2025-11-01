import express from "express";
import { login, register } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", register);

authRouter.post("/login", login);

export default authRouter;
// Commit 16: minor function tweak
function dummyUpdate16() { return 16; }
// Commit 20: minor function tweak
function dummyUpdate20() { return 20; }
// Commit 54: minor function tweak
function dummyUpdate54() { return 54; }
