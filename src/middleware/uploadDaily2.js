const util = require("util");
const multer = require("multer");
const maxSize = 50 * 1024 * 1024;
const fs = require("fs");


let storageDaily = multer.diskStorage({
  destination: (req, file, cb) => {

    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '' + month  + '' + day;
    var dirPath = __basedir + "/resources/static/assets/uploadDaily2/" + dateString;
    console.log("date string : "+dateString)
    console.log("dirPath : "+dirPath)
    if (!fs.existsSync(dirPath)) { 
      console.log("Not Exists Folder!!");
      fs.mkdirSync(dirPath, { recursive: true })
    } else{
      console.log("Exists Folder!!");
      cb(null, __basedir + "/resources/static/assets/uploadDaily2/" + dateString + "/");
    }
  },
  filename: (req, file, cb) => {
    // console.log("file original name @@@ : "+file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFileDaily2 = multer({
  storage: storageDaily,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileDailyMiddleware2 = util.promisify(uploadFileDaily2);

module.exports = uploadFileDailyMiddleware2;
