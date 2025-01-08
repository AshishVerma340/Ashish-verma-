/**
* @author Mohammad Nayan
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "lov", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "",
  prefix: true,
  category: "Love", 
  usages: "lov", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Love")==0 || event.body.indexOf("Bot i love")==0 || event.body.indexOf("Bot love")==0 || event.body.indexOf("I love")==0) {
		var msg = {
				body: "💔>✨ɭ❍ⱱɘ ɣ❍u ʈ❍ ɱɘɽīī 𝐣ʌʌŋ✨🦋 🚩🚩🚩 ✨💖🥀",
				attachment: 
fs.createReadStream(__dirname + `/cache/love.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
