const Discord = require("discord.js");
const snow = require("../snow.json");

const wiki = require("wikipediajs");

module.exports.run = async (bot, message, args) => {

    let wikipedia = args
    .join(" ");
    if(!wikipedia) return message.channel.send("PLEASE ENTER A WIKI SEARCH TERM**!**");
    
    wiki.search(wikipedia).then((res) => {
    
        let wikiEmbed = new Discord.RichEmbed()
        .setColor(snow.blue)
        .setDescriptioption(res);
        
        message.channel.send(wikiEmbed);
     
    }).catch(err => {
        
        console.log(err);
        
    });

}

module.exports.help = {
    name: "wikipedia"
}