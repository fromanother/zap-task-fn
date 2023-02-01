import express from "express";
import { ROOT_PATH } from "./utils/getRootPath.cjs";
import usersRouter from "./api/users.js";

const port = 3333;
const app = express();

app.use(express.json());

const PUBLIC_DIR_PATH = ROOT_PATH + "/public";

app.get("/", (req, res) => {
  res.send("Hello from Zaptic! 👋💜");
});

app.get("/zaptic", function (req, res) {
  const ZAPTIC_LOGO_PATH = PUBLIC_DIR_PATH + "/res/zaptic_logo.jpeg";
  res.sendFile(ZAPTIC_LOGO_PATH); // sendFile() automatically adds the appropriate headers for the filetype
});

app.use("/api/v1/users", usersRouter);

// Because it's added at the bottom of the middleware stack, this will execute when no other routes match,
// so it's appropriate for handling 404s
app.use((req, res) => {
  res.status(404).send("Seems like you're lost😱. Do you need some help?🕵️");
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

export default app;
