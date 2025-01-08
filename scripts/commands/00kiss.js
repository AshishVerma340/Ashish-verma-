const fs = require("fs");
module.exports.config = {
  name: "kis",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "hihihih",
  prefix: false,
  category: "no prefix",
  usages: "kiss",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😘😘")==0 || event.body.indexOf("💋💋")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("Kiss")==0) {
		var msg = {
				body: "😘💋𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐊𝐈𝐒𝐒💋😘",
				attachment: 
fs.createReadStream(__dirname + `/cache/kiss.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
