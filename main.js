const {Client} = require('dolphin-discord');

require('dotenv').config();

const config = require('./config.json');
const client = new Client(config);

process.on('unhandledRejection', console.error);

client.login(process.env.BOT_TOKEN);
