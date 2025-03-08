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

router.post("/upload", upload.single("file"), onNewImage);

module.exports = router;

// imageControllers.js
// imageNetworK.js
// cloudFlare.js
