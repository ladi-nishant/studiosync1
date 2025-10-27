import express from "express";
import { verifyToken } from "../middleware/verify.js";
import {
  getNotifications,
  getNotificationCount,
  markNotificationAsRead,
} from "../controllers/notificationController.js";

const notificationRouter = express.Router();

notificationRouter.get("/", verifyToken, getNotifications);

notificationRouter.get("/count", verifyToken, getNotificationCount);

notificationRouter.patch("/read", verifyToken, markNotificationAsRead);

export { notificationRouter };
// Commit 15: minor function tweak
function dummyUpdate15() { return 15; }
// Commit 18: minor function tweak
function dummyUpdate18() { return 18; }
