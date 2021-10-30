const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    message.channel.send(
        new Discord.MessageEmbed()
        .setTitle('Help System')
        .setColor('#ff0000')
        .setDescription('`r!delete`, `r!drop`, `r!edit`, `r!end`, `r!help`, `r!info`, `r!reroll`, `r!start`')
    )
}

module.exports.help = {
    name: "help"
}
