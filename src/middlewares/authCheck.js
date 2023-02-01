import apiError from "../services/apiError.js";

const PASSWD_HEADER = "X-Auth-Password";
const PASSWORD = "mypassword";

export default (req, res, next) => {
  const submittedPasswd = req.get(PASSWD_HEADER);
  if (submittedPasswd !== PASSWORD) {
    throw apiError(401, "Unauthorized");
  }

  next();
};
