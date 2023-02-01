/**
 * We need to have access to the root path (`src/`) of the project in several places
 * The standard way to access this path is using the `__dirname` variable
 * `__dirname` is not available in ES Modules, this is why we're using a Common js module here (.cjs filetype)
 * @module getRootPath
 */

const path = require("path");
module.exports.ROOT_PATH = path.join(__dirname, ".."); // `src` is one level down from the current directory
