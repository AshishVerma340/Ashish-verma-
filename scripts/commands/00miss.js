const fs = require("fs");
module.exports.config = {
  name: "miss",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "no prefix",
  usages: "miss",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Miss")==0 || event.body.indexOf("miss")==0 || event.body.indexOf("MISS")==0 || event.body.indexOf("Bot miss")==0) {
		var msg = {
				body: "💔>✨Miss ɣ❍u ʈ❍ ɱɘɽīī 𝐣ʌʌŋ✨🦋 🚩🚩🚩 ✨💖🥀",
				attachment: 
fs.createReadStream(__dirname + `/cache/miss.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
