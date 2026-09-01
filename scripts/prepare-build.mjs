import { copyFile, mkdir, readdir, rename } from "node:fs/promises";

await mkdir("dist/client", { recursive: true });

for (const entry of await readdir("dist", { withFileTypes: true })) {
  if ([".openai", "client", "server"].includes(entry.name)) continue;

  const source = `dist/${entry.name}`;
  const destination = `dist/client/${entry.name}`;

  await rename(source, destination);
}

await mkdir("dist/server", { recursive: true });
await copyFile("worker.js", "dist/server/index.js");
