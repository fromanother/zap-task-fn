import converter from "json-2-csv";
import { ROOT_PATH } from "../../utils/getRootPath.cjs";
import fs from "fs";
import path from "path";

const readUsersCSV = async () => {
  return await fs.promises.readFile(
    path.join(ROOT_PATH, "data", "users.csv"),
    "utf8"
  );
};

const writeUsersCSV = async (csvString) => {
  return await fs.promises.writeFile(
    path.join(ROOT_PATH, "data", "users.csv"),
    csvString,
    { encoding: "utf8" }
  );
};

export const usersToJson = async () => {
  const usersCSV = await readUsersCSV();
  return await converter.csv2jsonAsync(usersCSV);
};

export const usersToCSV = async (usersJson) => {
  const csv = await converter.json2csvAsync(usersJson);
  await writeUsersCSV(csv);
};
