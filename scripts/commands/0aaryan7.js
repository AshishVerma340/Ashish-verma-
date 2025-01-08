const fs = require("fs");
module.exports.config = {
  name: "gutkha",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "no prefix",
  usages: "🙂",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😝")==0 || event.body.indexOf("😜")==0 || event.body.indexOf("🤪")==0 || event.body.indexOf("😛")==0) {
		var msg = {
				body: "💐𝐆𝐮𝐭𝐤𝐡𝐚 𝐊𝐡𝐚𝐭e 𝐇𝐨 𝐤𝐲𝐚 𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐉𝐮𝐛𝐚𝐚𝐧 𝐋𝐚𝐚𝐥 𝐤𝐲𝐮 𝐇𝐚𝐢 𝐁𝐨𝐥𝐨 𝐉𝐮𝐛𝐚𝐚𝐧 𝐊𝐞𝐬𝐡𝐫𝐢 💐",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
