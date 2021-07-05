require('dotenv').config();

import { Client } from 'discord.js';

const client: Client = new Client();
const cron = require('node-cron');

let guild:any;
let voiceChannel:any;


client.on('ready', async () => {
	try {
		guild = await client.guilds.fetch(process.env.GUILD_ID);
		voiceChannel = guild.channels.cache.get(process.env.VOICE_CHANNEL_ID);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
	console.log('sheeeeee!');
})


const task = cron.schedule('* */30 * * * *', async () => {

});



var time = new Date();

// CADA 3O MINS, SONIDO

console.log(time.getMinutes());


client.login(process.env.DISCORD_TOKEN);