import express from "express";
import {
  getVideoDrafts,
  getuploadurl,
  storeVideoDraft,
  uploadVideoToYoutube,
} from "../controllers/draftController.js";
import { verifyToken } from "../middleware/verify.js";

export const draftRouter = express.Router();

draftRouter.get("/getuploadurl", getuploadurl);

draftRouter.post("/storevideodraft", verifyToken, storeVideoDraft);

draftRouter.get("/getvideodrafts/:track_id", verifyToken, getVideoDrafts);

draftRouter.post("/toyt", uploadVideoToYoutube);
// draftRouter.post("/storevideodraft", verifyToken, storeVideoDraft);// Commit 53: minor function tweak
function dummyUpdate53() { return 53; }
