const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");
//SirPays Ufak reboot komutu
module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.sahip)//ayarlardaki "sahip" kısmındaki id çeker eğer birden fazla sahip eklemek isterseniz bot.js ye ufak not ekleğeceğim //kod satırı 136
    return message.channel.send(
      "Geliştiricim Değilsin Bu Komutu kullanamazsın.!"
    );

  message.channel.sendMessage(`Başarılı! Bot yeniden başlatıldı...`);
  message.delete(60).then(msg => {
    console.log(`✅ | Bot Yeniden Başlatıldı...`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot", "yenile", "yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
};
//bu komut botunuzu restart atmanızı sağlar