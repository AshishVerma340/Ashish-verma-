const fs = require("fs");
module.exports.config = {
  name: "Abdul",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "no prefix",
  usages: "Mɽ Khaŋ",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Abdul")==0 || event.body.indexOf("@Abdul JI")==0 || event.body.indexOf("@Mɽ Khaŋ")==0 || event.body.indexOf("Mahi ka babu")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐀𝐏𝐊𝐄 𝐁𝐀𝐋𝐀𝐌 𝐉𝐈 𝐀 𝐆𝐀𝐘𝐄🙈",
				attachment: fs.createReadStream(__dirname + `/cache/balam.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
