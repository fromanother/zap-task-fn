import converter from "json-2-csv";
import fs from "fs";

const readCSVFile = async (filePath) => {
  return await fs.promises.readFile(filePath, "utf8");
};

const writeCSVFile = async (csvString, filePath) => {
  return await fs.promises.writeFile(filePath, csvString, { encoding: "utf8" });
};

export const csvToJson = async (filePath) => {
  const usersCSV = await readCSVFile(filePath);
  return await converter.csv2jsonAsync(usersCSV);
};

export const jsonToCSV = async (usersJson, filePath) => {
  const csv = await converter.json2csvAsync(usersJson);
  return await writeCSVFile(csv, filePath);
};
