import path, { resolve } from "path";
import { defineConfig } from "vite";
const isGitHubPages = false;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "/index.html"),
        detail: resolve(__dirname, "/details.html"),
      },
    },
  },
});
