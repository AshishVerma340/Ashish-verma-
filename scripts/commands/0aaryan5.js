const fs = require("fs");
module.exports.config = {
  name: "fiver",
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
	if (event.body.indexOf("🤒")==0 || event.body.indexOf("🤧")==0 || event.body.indexOf("🤢")==0 || event.body.indexOf("Fiver")==0) {
		var msg = {
				body: "💐ᴋʏᴀ ʜᴜᴀ ʙᴀʙʏ ᴛᴀʙɪʏᴀᴛ ᴋʜᴀʀᴀʙ ʜᴀɪ ᴍᴜᴊʜᴇ ʙᴀᴛᴀᴏ ᴍᴀɪ ᴀʙʜɪ ᴛᴜᴍʜᴀʀᴇ ʟɪʏᴇ ᴅᴀᴠᴀ ʟᴇᴋᴀʀ ᴀᴀᴛᴀ ʜᴜ 💊💐",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😟", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
