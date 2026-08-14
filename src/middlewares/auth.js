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

module.exports = { adminAuth };
