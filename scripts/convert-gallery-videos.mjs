import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import ffmpegPath from "ffmpeg-static";

const galleryDirectory = path.join(process.cwd(), "public", "media", "gallery");
const movFiles = fs
  .readdirSync(galleryDirectory)
  .filter((fileName) => fileName.toLowerCase().endsWith(".mov"));

for (const fileName of movFiles) {
  const input = path.join(galleryDirectory, fileName);
  const output = path.join(galleryDirectory, fileName.replace(/\.mov$/i, ".mp4"));

  if (fs.existsSync(output)) continue;

  const result = spawnSync(
    ffmpegPath,
    [
      "-y",
      "-i",
      input,
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "-c:a",
      "aac",
      "-movflags",
      "+faststart",
      output,
    ],
    { stdio: "inherit" },
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
