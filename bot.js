const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [  https://discord.gg/T9xYR4 ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
