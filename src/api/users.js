import { Router } from "express";
import usersService from "../services/usersService.js";

const usersRouter = Router();

usersRouter.get("/:userId", async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await usersService.getUser(userId);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

usersRouter.post("/", async (req, res, next) => {
  try {
    const user = req.body;
    const createdUser = await usersService.createUser(user);
    res.status(200).json(createdUser); // returning the created entity as per REST best practices
  } catch (err) {
    next(err);
  }
});

// Error handling for this specific router
usersRouter.use((err, req, res) => {
  res.status(err.status).json({ errorMessage: err.message });
});

export default usersRouter;
