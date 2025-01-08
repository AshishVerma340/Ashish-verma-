const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot2",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  category: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Aa gye tharki ruko m aapko Dp deta hu Jo Dp chahiye wo likho â˜ž.girldp/.cpldp/.frnddp/.boydp/.bestiedpâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Biryani ðŸ¥— deta hu likho â˜žBiryaniâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Mungfali ðŸ¥œ deta hu likho â˜žMungfaliâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Milk Cake deta hu likho â˜žMilk cakeâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Laddu ðŸª deta hu likho â˜žLadduâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Kurkure ðŸ«“ deta hu likho â˜žKurkureâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Cold Drink deta hu likho â˜žCold drinkâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Chips ðŸ¥” deta hu likho â˜žChipsâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Watter ðŸ¶ deta hu likho â˜žPaniâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Tofee ðŸ¬ deta hu likho â˜žTofeeâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Barfi ðŸ§€ deta hu likho â˜žBarfiâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Burgur deta hu likho â˜žBurgerâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Cigarette ðŸš¬ peelata hu likho â˜žCigaretteâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Hukka ðŸº peelata hu likho â˜žHukkaâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Ice Cream ðŸ¨ deta hu likho â˜žIce Creamâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Chowmin ðŸœ deta hu likho â˜žChowminâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Aaryan ko bulata hu likho â˜žAaryanâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi maggie hu likho â˜žMaggieâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Cake ðŸŽ‚ deta hu likho â˜žCakeâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Jalebi ðŸ¥¨ deta hu likho â˜žJalebiâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi French fries ðŸŸ deta hu likho â˜žFrenchâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Juice ðŸ§ƒ peelata hu likho â˜žJuiceâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Daru ðŸ» peelata hu likho â˜žDaruâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Chai â˜• peelata hu likho â˜žChaiâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Biskit ðŸ¥˜ deta hu likho â˜žBiskutâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Golgappe ðŸ˜‹deta hu likho â˜žGolgappeâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Pasta ðŸ¥ deta hu likho â˜žPastaâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Rasgulla deta hu likho â˜žRasgulla" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Gulabjamun deta hu likho â˜žGulabjamunâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Nasta deta hu likho â˜žNastaâ˜œ" ,"Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Samosa ðŸ”¶ deta hu likho â˜žSamosaâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Pizza ðŸ• deta hu likho â˜žPizzaâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Momos ðŸ¥Ÿ deta hu likho â˜žMomosâ˜œ" , "Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi chocolate ðŸ« deta hu likho â˜žChocolateâ˜œ","Ha Bolo yhi hu kya hua,Ruko mai abhi Chhole Bhature de rha hu Likho â˜žBhaturaâ˜œ","Ha Bolo Yhi hu kya hua,Ruko mai Abhi Chicken ðŸ” deta hu Likhoâ˜žMurgaâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Coffee â˜• pilata hu likho â˜žCoffeeâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Pepsi ðŸ¥¤  pilata hu likho â˜žPepsiâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Parathe ðŸ¥ž Khilata hu likho â˜žParatheâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Popcorn ðŸ¿Khilata hu likho â˜žPopcornâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Dudh ðŸ¥›  pilata hu likho â˜žDudhâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi LassiðŸ§‹   Pilata hu likho â˜žLassiâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Lolipop ðŸ­deta hu likho â˜žlolipopâ˜œ","Ha Bolo Yhi Hu ï¸Kya huva, Ruko me abhi Rose ðŸŒ¹ deta hu likho â˜žRoseâ˜œ",];
var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "ðŸ‡®ðŸ‡³") || (event.body.toLowerCase() == "ðŸ‡®ðŸ‡³ðŸ‡®ðŸ‡³")) {
     return api.sendMessage("à¤¹à¤¿à¤‚à¤¦à¥à¤¸à¥à¤¤à¤¾à¤¨ à¤œà¤¿à¤‚à¤¦à¤¾à¤¬à¤¾à¤¦ ðŸ‡®ðŸ‡³ðŸ‡®ðŸ‡³", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Babu") == 0 || (event.body.indexOf("@MOTU BOT") == 0 || (event.body.indexOf("Motu")) == 0)) {
    var msg = {
      body: `ðŸŒ´ðŸª»ðŸª´${name}ðŸŒ²ðŸª·ðŸŒ¿, \n\n
          ${rand} ðŸ€ðŸŒºðŸ’¦


           * à½«à¼„ð’â‰›âƒðƒð«.ðŒðšð¡ð¢.ðð¨ð¨ð«ðŸ’`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
