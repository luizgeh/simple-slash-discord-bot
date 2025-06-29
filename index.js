/*

.##.......##.....##.####.########..######...########.##.....##
.##.......##.....##..##.......##..##....##..##.......##.....##
.##.......##.....##..##......##...##........##.......##.....##
.##.......##.....##..##.....##....##...####.######...#########
.##.......##.....##..##....##.....##....##..##.......##.....##
.##.......##.....##..##...##......##....##..##.......##.....##
.########..#######..####.########..######...########.##.....##

Plugin has created by luizgeh

Twitter: @luizgeh
Github: https://github.com/luizgeh

Copyrigth Luiz Guilherme (luizgeh), all rigths reserved.

*/

requite('dotenv').config();

const { Client, REST, Routes } = require('discord.js');
const bot = new Client({intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent']});

bot
	.login(process.env.TOKEN)
	.then
	(
		() =>
		{
			console.log('Bot is online!');
		}
	)
	.catch
	(
		(error) =>
		{
			console.error(`Error: ${error}`);
		}
	);

const rest = new REST().setToken(process.env.TOKEN);
rest.put(Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID), {body: [{name: 'hi', description: 'Say hi.'}]});

bot
	.on
	(
		'ready',
		() =>
		{
			bot.user.setActivity('Bot by luigeh')
		}
	)
	.on
	(
		'interactionCreate',
		(interaction) =>
		{
			if (!interaction.isChatInputCommand()) return;
			
			if (!interaction.commandName == 'hi') return;
			
			interaction.reply('Hi!');
		}
	);