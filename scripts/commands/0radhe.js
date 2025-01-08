const fs = require("fs");
module.exports.config = {
  name: "radhe radhe",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "Just respond",
  prefix: false,
  category: "no prefix",
  usages: "radhe",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Radhe") ||
     react.includes("RADHE RADHE") || react.includes("radhe") || react.includes("Radhe radhe") ||
react.includes("Jay shri krishna") ||
react.includes("Krishna")) {
		var msg = {
				body: ` राधे राधे __❤️🙏 `,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
