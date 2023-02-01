import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = 3333;
const app = express();

const getDirnameInESModule = () => {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
};

const PUBLIC_DIR_PATH = getDirnameInESModule() + "/public/res/";
const ZAPTIC_LOGO_PATH = PUBLIC_DIR_PATH + "zaptic_logo.jpeg";

app.get("/", (req, res) => {
  res.send("Hello from Zaptic! 👋💜");
});

app.get("/zaptic", function (req, res) {
  res.sendFile(ZAPTIC_LOGO_PATH); // sendFile() automatically adds the appropriate headers for the filetype
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

export default app;
