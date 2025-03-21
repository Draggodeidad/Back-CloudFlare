const CloudFlare = require("../cloudFlare");
const ServiceLocator = require("./dependencyLocator");
const ResendService = require("../resend");

const cloudFlareService = CloudFlare.getInstance;
const di = ServiceLocator.getInstance;

const nameServices = {
  cloudFlare: "cloudflare",
  resend: "resend",
};

function init() {
  di.bindLazySingleton(nameServices.cloudFlare, () => cloudFlareService);
  di.bindLazySingleton(nameServices.resend, () => ResendService.getInstance());
}

function getCloudFlare() {
  return di.get(nameServices.cloudFlare);
}

function getResend() {
  return di.get(nameServices.resend);
}

module.exports = { init, getCloudFlare, getResend };
