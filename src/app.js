import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = 3333;
const app = express();

const getDirnameInESModule = () => {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
};
const PUBLIC_DIR_PATH = getDirnameInESModule() + "/public";

app.get("/", (req, res) => {
  res.send("Hello from Zaptic! 👋💜");
});

app.get("/zaptic", function (req, res) {
  const ZAPTIC_LOGO_PATH = PUBLIC_DIR_PATH + "/res/zaptic_logo.jpeg";
  res.sendFile(ZAPTIC_LOGO_PATH); // sendFile() automatically adds the appropriate headers for the filetype
});

// Because it's added at the bottom of the middleware stack, this will execute when no other routes matched,
// so it's appropriate for handling 404
app.use((req, res) => {
  res.status(404).send("Seems like you're lost😱. Do you need some help?🕵️");
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

export default app;
