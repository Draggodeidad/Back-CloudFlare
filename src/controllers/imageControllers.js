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
function onGetImages() {
  const cloudFlareService = new CloudFlareService();
  return cloudFlareService.getImages();
}

module.exports = {
  onNewImage,
  onDeleteImage,
  onGetImages,
};
