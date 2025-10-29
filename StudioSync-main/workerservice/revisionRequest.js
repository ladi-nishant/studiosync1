import { sendMail } from "./emailWorker.js";
import { io } from "./socket.js";
import Redis from "ioredis";

const redisClient = new Redis(); //todo : connect to different redis host

export const sendRevisionRequestEmail = async (notification) => {
  const {
    editor_email,
    track_id,
    editor_id,
    notificationMessage,
    id,
    created_at,
  } = notification;
  console.log(editor_id);
  const subject = "Studio Sync Revision Request";
  const text = `
      A revision request has been made for the track with ID: ${track_id}.
      Link to view the revision: http://localhost:3000/revision/${track_id}
    `;
  const editorSocketId = await redisClient.hget("userSocketMap", editor_id);
  if (editorSocketId) {
    io.to(editorSocketId).emit("new-notification", {
      track_id,
      id,
      message: notificationMessage,
      is_read: false,
      created_at,
    });
  }
  // return await sendMail({ to: editor_email, subject, text });
};
// Commit 2: minor function tweak
function dummyUpdate2() { return 2; }
// Commit 69: minor function tweak
function dummyUpdate69() { return 69; }
// Commit 81: minor function tweak
function dummyUpdate81() { return 81; }
