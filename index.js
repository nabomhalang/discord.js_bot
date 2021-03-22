const discord = require ('discord.js');
const config = require('./config.json');
const discordTTS=require("./discord-tts");
const queue = new Map();
const ytdl = require('ytdl-core');

var servers = {};
var client = new discord.Client();

const fs = require('fs');

client.on('ready', () => {
    console.log("ready!");
    console.log(`${client.users.cache.size}명`);
    console.log(`${client.guilds.cache.size}개`);
    console.log(`${client.user.tag}로 로그인 성공!`);

    client.user.setActivity(`!명령어`, {type:'PLAYING'});
});

client.on('message', (message) => {
    if(message.author.bot) return;
    
  


    if (message.content.startsWith(config.prefix + '안녕')) {
        message.channel.send('반가워요 ' + message.author.username + '님!');
    }
    if (message.content.startsWith(config.prefix + '무야호')) {
        message.channel.send('무야~호~~~', {files: ['./images/muyaho.jpeg']})
    }
    if (message.content.startsWith(config.prefix + ':thinking:')) {
        message.channel.send(':thinking:');
    }
    if (message.content.startsWith(config.prefix + '아바타')) {
        message.channel.send(message.author.displayAvatarURL());
    }
    if (message.content.startsWith(config.prefix + '명령어')) {
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "무야호 봇",
            //url: "http://google.com/",
            description: "당신에게 최고의 무야호를 선물해 드립니다.",
            fields: [{
                name: "제작자",
                value: "nabomhalang(나봄하랑)"
              },
              {
                name: "명령어",
                value: "!명령어 !아바타 !안녕 !무야호 !배병욱"
              },
              {
                name: '서버활동',
                value: `${client.guilds.cache.size}개의 서버에서 활동중!`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© nabomhalang"
            }
          }
        });
    }
});


client.login(config.token);