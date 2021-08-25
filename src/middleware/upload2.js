const util = require("util");
const multer = require("multer");
const maxSize = 50 * 1024 * 1024;

let storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads2/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile2 = multer({
  storage: storage2,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware2 = util.promisify(uploadFile2);

module.exports = uploadFileMiddleware2;
