const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.Bot_Token);

try {
    bot.start((ctx)=> ctx.reply('Welcome to this testing bot'));
    bot.help((ctx) => ctx.reply('Send me a sticker'));
    bot.on(('sticker'), (ctx) => ctx.reply('👍'));
    bot.hears('hi', (ctx) => ctx.reply('Hey there'));

    bot.command('oldschool', (ctx) => ctx.reply('Hello'));
    bot.command('hipster', Telegraf.reply('λ'));
    bot.command('toplinuxcommands', (ctx) => ctx.reply('ls cd pwd rm'));
    bot.on('text', (ctx) => ctx.reply("I do not want to talk to you"));

   
    bot.launch();
} catch (error) {
    console.log("Unexpected command",error);
}

