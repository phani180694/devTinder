const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://phanibabubabu_db_user:Z0hxBgr6HXtXq0ry@namastenode.qxem50z.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
