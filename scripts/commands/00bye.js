const fs = require("fs");
module.exports.config = {
  name: "bye",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "no prefix",
  usages: "bye",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Bye")==0 || event.body.indexOf("by")==0 || event.body.indexOf("By")==0 || event.body.indexOf("BY")==0) {
    var msg = {
        body: "𝐁𝐘𝐞 , 𝐁𝐲𝐞 𝐓𝐚𝐤𝐞 𝐂𝐚𝐫𝐞 𝐁𝐚𝐛𝐮😍",
        attachment: 
fs.createReadStream(__dirname + `/cache/bye.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
