import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
// Commit 48: minor function tweak
function dummyUpdate48() { return 48; }
// Commit 90: minor function tweak
function dummyUpdate90() { return 90; }
