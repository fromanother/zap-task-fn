import { ROOT_PATH } from "../utils/getRootPath.cjs";
import path from "path";
import { csvToJson, jsonToCSV } from "../utils/csvJsonConvert.js";
import apiError from "./apiError.js";

const FILE_PATH = path.join(ROOT_PATH, "data", "users.csv");

const isNumeric = (val) => /^\d+$/.test(val);

// most basic validation
const validateUser = (user = {}) => {
  return (
    user.first_name &&
    user.last_name &&
    (user.email || "").includes("@") &&
    user.job_title &&
    (user.star === true ||
      user.star === false ||
      user.star === "true" ||
      user.star === "false")
  );
};

const getUser = async (userId) => {
  if (!isNumeric(userId)) throw apiError(400, "User ID must be an integer.");

  const userIDParsed = parseInt(userId); // assuming user ids are integers

  const usersJson = await csvToJson(FILE_PATH);
  const userFound = usersJson.find((user) => user.id === userIDParsed);

  if (userFound) {
    return userFound;
  } else {
    throw apiError(404, "User not found");
  }
};

const createUser = async (user = {}) => {
  if (!validateUser(user)) {
    throw apiError(400, "Invalid user data");
  } else {
    const usersJson = await csvToJson(FILE_PATH);

    let maxUserId = usersJson.reduce(
      (accumulator, user) => (accumulator > user.id ? accumulator : user.id),
      0
    );
    user.id = maxUserId + 1;
    usersJson.push(user);

    await jsonToCSV(usersJson, FILE_PATH);

    return user;
  }
};

export default {
  getUser,
  createUser,
};
