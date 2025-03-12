const CloudFlareService = require("../services/cloudFlare");

//Singleton

function onNewImage(path) {
  const cloudFlareService = new CloudFlareService();
  return cloudFlareService.uploadImage(path);
}

function onDeleteImage(imageId) {
  const cloudFlareService = new CloudFlareService();
  return cloudFlareService.deleteImage(imageId);
}

module.exports = {
  onNewImage,
  onDeleteImage,
};
