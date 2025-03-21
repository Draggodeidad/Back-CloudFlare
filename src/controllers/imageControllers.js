const {
  getCloudFlare,
  getResend,
} = require("../services/servicesLocator/composer");
// singleton
// service Locator

function onNewImage(path) {
  getResend().sendEmail();
  const cloudFlareService = getCloudFlare();
  return cloudFlareService.uploadImage(path);
}

function OnDeleteImage(imageId) {
  const cloudFlareService = getCloudFlare();
  return cloudFlareService.deleteImage(imageId);
}

module.exports = {
  onNewImage,
  OnDeleteImage,
};
