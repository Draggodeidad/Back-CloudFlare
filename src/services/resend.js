const { Resend } = require("resend");

const resend = new Resend("re_123456789"); // Aqui va el apiKey

class ResendService {
  static instance;

  constructor() {}

  static getIntance() {
    if (!ResendService.instance) {
      ResendService.instance = new ResendService();
    }
    return ResendService.instance;
  }

  async sendEmail() {
    const { data, error } = await resend.emails.send({
      from: "Imanol Antonio from lacafeutt <no-reply@lacafeutt.store>",
      to: ["delivered@resend.dev"],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    if (error) {
      return console.error({ error });
    }
  }
}

module.exports = ResendService;
