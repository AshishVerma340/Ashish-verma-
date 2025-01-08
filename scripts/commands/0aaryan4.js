const fs = require("fs");
module.exports.config = {
  name: "lough 2",
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
  if (event.body.indexOf("😂")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😹")==0 || event.body.indexOf("😆")==0) {
    var msg = {
        body: "💐𝐉𝐚𝐃𝐚 𝐌𝐚𝐭 𝐇𝐚𝐬𝐇𝐨 𝐖𝐚𝐑𝐧𝐚 𝐃𝐚𝐧𝐭 𝐓𝐨𝐝 𝐃𝐮𝐍𝐠𝐚🤟💐",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤪", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
