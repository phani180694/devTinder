const adminAuth = (req, res, next) => {
  console.log("Admin Auth isgetting checked!!");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    return res.status(401).send("unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User Auth is getting checked!!");
  const token = "xyzabc";
  const isUserAuthorized = token === "xyz";
  if (!isUserAuthorized) {
    return res.status(401).send("unauthorized request");
  } else {
    next();
  }
};
module.exports = { userAuth, adminAuth };
