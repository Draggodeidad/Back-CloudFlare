const express = require("express");
const Controller = require("../controllers/imageControllers");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

async function onNewImage(request, response) {
  const file = request.file;
  const result = await Controller.onNewImage(file.path);
  response.send(result.data);
}

async function onDeleteImage(request, response) {
  const { image_id } = request.params;
  const result = await Controller.onDeleteImage(image_id);
  response.send(result.data);
}

router.delete("/delete/:image_id", onDeleteImage);

router.post("/upload", upload.single("file"), onNewImage);

//router.get("/info/:image_id");

module.exports = router;

// imageControllers.js
// imageNetworK.js
// cloudFlare.js
