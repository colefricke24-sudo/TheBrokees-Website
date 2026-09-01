import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist/server", { recursive: true });
await copyFile("worker.js", "dist/server/index.js");
