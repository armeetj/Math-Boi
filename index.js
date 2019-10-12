require('dotenv').config();
const token = process.env.TOKEN;
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');

var prefix = "$";

//colors.
const defaultGreen = "00ff2a";
const red = "ea1700"; 
const orange = "ff7700";
const yellow = "ffe900";
const blue = "00aeff";

bot.login(token);

bot.on("ready", () =>
{
    console.log("this bot is online!");
    bot.user.setStatus("online");
    
        bot.user.setPresence({
            game: {
                name: 'WITH NUMBERS | type $help',
                type: "PLAYING"
            }
        });
})



bot.on("message", message => 
{
    try{
        if(message.content.substring(0, prefix.length)===prefix)
        {
            let args = message.content.substring(prefix.length, message.length).split(" ");
    
            switch(args[0])
            {
                case "ping":
                    console.log("pinged by user: " + message.author.username);
                    var embed = new Discord.RichEmbed().setTitle("pong").setColor(defaultGreen);
                    message.channel.send(embed);
                    console.log("ponged user: " + message.author.username);
                break;
                case "invite":
                {
                    console.log("sending invite link");
                    message.channel.send("Bot Invite Link: https://discordapp.com/api/oauth2/authorize?client_id=564324981685878784&permissions=8&scope=bot")
                }
                break;
                case "add":
                    if(args.length == 3)
                    {
                        console.log("added")
                        var embed = new Discord.RichEmbed().setTitle(parseInt(args[1])+ parseInt(args[2])).setColor(red);
                        message.channel.send(embed);
                    }
                    else{
                        console.log("not entered correctly");
                        var embed = new Discord.RichEmbed().setTitle("command not entered correctly").setColor(red);
                        message.channel.send(embed);
                    }
                break;
                case "sub":
                    if(args.length == 3)
                    {
                        console.log("subtracted")
                        var embed = new Discord.RichEmbed().setTitle(parseInt(args[1])- parseInt(args[2])).setColor(orange);
        
                        message.channel.send(embed);
                    }
                    else{
                        console.log("not entered correctly");
                        var embed = new Discord.RichEmbed().setTitle("command not entered correctly").setColor(orange);
                        message.channel.send(embed);
                    }
                break;
                case "mult":
                    if(args.length == 3)
                    {
                        console.log("multiplied")
                        var embed = new Discord.RichEmbed().setTitle(parseInt(args[1])* parseInt(args[2])).setColor(yellow);
        
                        message.channel.send(embed);
                    }
                    else{
                        console.log("not entered correctly");
                        var embed = new Discord.RichEmbed().setTitle("command not entered correctly").setColor(yellow);
                        message.channel.send(embed);
                    }
                break;
                case "div":
                    if(args.length == 3)
                    {
                        console.log("divided")
                        var embed = new Discord.RichEmbed().setTitle(parseFloat(args[1])/ parseFloat(args[2])).setColor(defaultGreen);
        
                        message.channel.send(embed);
                    }
                    else{
                        console.log("not entered correctly");
                        var embed = new Discord.RichEmbed().setTitle("command not entered correctly").setColor(defaultGreen);
                        message.channel.send(embed);
                    }
                break;
                case "fact":
                    
                    if(args.length == 2)
                    {
                        console.log("factorial");
                        var product = 1;
                        if(args[1] < 100)
                        {
                            for(z = 1; z <= parseInt(args[1]); z++)
                            {
                                product *= z;
                            }
                            var embed = new Discord.RichEmbed().setTitle(product).setColor(blue);
            
                            message.channel.send(embed);
                        }else{
                            var embed = new Discord.RichEmbed().setTitle("number is too big").setColor(blue);
                            message.channel.send(embed);
                        }
                        
                    }else{
                        console.log("not entered correctly");
                        var embed = new Discord.RichEmbed().setTitle("command not entered correctly").setColor(blue);
                        message.channel.send(embed);
                    }
                break;
                case "getping": 
                    var ping = Math.abs(Date.now - message.createdTimestamp);
                    if(ping > 60)
                    {
                        var embed = new Discord.RichEmbed().setColor(defaultGreen).addField("ping", "```excel\n"+ ping+ "ms" + "\n```");
                    }else{
                        var embed = new Discord.RichEmbed().setColor(defaultGreen).addField("ping", "```yaml\n"+ ping + "ms"+"\n```");
                    }
                    message.channel.send(embed);
                break;
                case "help":
                     var helpEmbed = new Discord.RichEmbed()
                     .setTitle("__*help*__ \n")
                     .setColor(defaultGreen)
                     .addField("creator: @xarmeetx#7768", "student at EVHS")
                     .addField("Current Server: ", message.guild.name)
                     .addField("link to add to another server: " + "https://discordapp.com/api/oauth2/authorize?client_id=564324981685878784&permissions=8&scope=bot")
                     .addField("commands:", " current commands in the server") 
                     .addField(prefix + "help: ", "display the help menu")
                     .addField(prefix + "ping: ", "bot responds with pong")
                     .addField(prefix + "getping: ", "gets ping of bot")
                     .addField(prefix + "add: ", "add two numbers")
                     .addField(prefix + "sub: ", "sub two numbers")
                     .addField(prefix + "mult: ", "multiply two numbers")
                     .addField(prefix + "div: ", "divide two numbers")
                     .addField(prefix + "fact: ", "find the factorial of the given number")
                     .addField(prefix + "change-prefix: ", "*currently disabled* change the prefix for commands")
                    message.channel.send(helpEmbed);
                break;
            }
    }     
    }catch(error)
    {
        console.log("ERROR thrown");
    }
    
    
})
