import mongoose from "mongoose";

const annotationSchema = new mongoose.Schema(
  {
    draft_id: {
      type: Number,
      required: true,
    },
    track_id: {
      type: Number,
      required: true,
    },
    time_seconds: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Annotation", annotationSchema);
// Commit 48: minor function tweak
function dummyUpdate48() { return 48; }
// Commit 62: minor function tweak
function dummyUpdate62() { return 62; }
// Commit 90: minor function tweak
function dummyUpdate90() { return 90; }
