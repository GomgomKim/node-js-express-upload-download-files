const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.post("/upload2", controller.upload2);
  router.post("/uploadDaily", controller.uploadDaily);
  router.post("/uploadDaily2", controller.uploadDaily2);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;