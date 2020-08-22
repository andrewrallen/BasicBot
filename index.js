//Infomation
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = ''

const PREFIX = '-';

var version = '1.0.1 - Developed by Andrew Allen (thedrew#0254)';

bot.on('ready', () =>{
console.log('This bot has started');
})





//Inital Commands
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

            case 'creatorwebsite' :
                message.channel.send('https://theandrewallen.com')
                break;

                case 'deputy_ostrich':
                    message.channel.send('https://pornhub.com');
                    break;

                case 'info':
                   if(args[1] === 'version'){
                       message.channel.send(version)
                   }else{
                       message.channel.send('Invalid Arguement')
                   }
                    break;
                    case 'clearmsg':
                        if(message.member.roles.cache.has('734545424211509329')){
                            if(!args[1]) return message.reply(':octagonal_sign: You must insert a value.');
                            message.channel.bulkDelete(args[1]);
                          }

                    break;

                       case 'embed':
                            const embed = new Discord.MessageEmbed()
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                            case 'kick':
                        if (message.content.startsWith(';kick')) {
                            const user = message.mentions.users.first();
                            if (user) {
                                const member = message.guild.member(user);
                                if (member) {
                                    member
                                    .kick('Optional reason that will display in audio logs')
                                    .then (() => {
                                        message.reply (`:wave: ${user.tag} was kicked.`);
                                    })
                                    .catch(err => {
                                        message.reply('I am missing permission to kick that member.');
                                        console.error(err);
                                      });
                                  } else {
                                    message.reply("That user isn't in this server.");
                                  }
                                } else {
                                  message.reply("You have to tell me who to kick.");
                                }
                              }
                            }
                            
                            
                            bot.on('message', message => {
                              if (!message.guild) return;
                            
                              if (message.content.startsWith('!ban')) {
                                const user = message.mentions.users.first();
                                if (user) {
                                  const member = message.guild.member(user);
                                  if (member) {
                                    
                                    member
                                      .ban({
                                        reason: 'They were bad!',
                                      })
                                      .then(() => {
                                        message.reply(`Successfully banned ${user.tag}`);
                                      })
                                      .catch(err => {
                                        message.reply('I was unable to ban the member');
                                        console.error(err);
                                      });
                                  } else {
                                    message.reply("That user isn't in this guild!");
                                  }
                                } else {
                                  message.reply("You didn't mention the user to ban!");
                                }
                              }
                            });


                            
                        

                            
    
    
                }               

        

)

bot.login(token);