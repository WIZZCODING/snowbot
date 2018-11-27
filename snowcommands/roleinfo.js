const Discord = require("discord.js");
const snow = require("../snow.json");

const convert = require("color-convert");

module.exports.run = async(bot, message, args) => {

    let therole = args.join(" ");
    if(!therole) return message.channel.send("PLEASE SPECIFY A ROLE YOU WANT TO CHECK INFORMATION ABOUT**!**");
    
    let role = message.guild.roles.find(`name`, therole);
    if(!role) return message.channel.send("CAN'T FIND ROLE**!**");
    
    let rolecolor = role.hexColor.replace("#", "");
    
    let roleinfoEmbed = new Discord.RichEmbed()
    .setColor(snow.blue)
    .setDescription("ROLEINFO **" + snow.snowflake + "**\n**" + role + "**")
    .addField("ID", role.id)
    .addField("POSITION", message.guild.roles.size - role.calculatedPosition - 1 + " **/** " + message.guild.roles.size)
    .addField("COLOR", "**#**" + rolecolor.toUpperCase() + "\n**RGB(**" + convert.hex.rgb(rolecolor) + "**)**")
    .addField("CREATED AT", role.createdAt.toDateString().toUpperCase())
    .addField("MENTIONABLE", role.mention)
    .addField("MANAGED", role.managed)
    .addField("HOIST", role.hoist)
    .setFooter("ROLEINFO | SNOW " + snow.snowflake, bot.user.displayAvatarURL);
    
    message.channel.send(roleinfoEmbed);

}

module.exports.help = {
    name: "roleinfo"
}