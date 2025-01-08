const fs = require("fs");
module.exports.config = {
  name: "goodmorning",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "gm",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Good m")==0 || event.body.indexOf("Gm")==0 || event.body.indexOf("Good Mrng")==0 || event.body.indexOf("GOOD M")==0) {
		var msg = {
				body: "𝐕𝐄𝐑𝐘 𝐆𝐎𝐎𝐃 𝐌𝐎𝐑𝐍𝐈𝐍𝐆",
				attachment: 
fs.createReadStream(__dirname + `/noprefix/gm.mp4`)
			}
			api.sendMessage(msg, threadID, messageID); 
    api.setMessageReaction("🌄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
