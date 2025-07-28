import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
import { config } from './config.js';

const commands = [
  {
    name: 'create',
    description: 'Creates a short url.',
  },
];

const rest = new REST({ version: '10' }).setToken(config.DISCORD_STRING);

// Wrap inside an async function
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(config.CLIENT_ID), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error('Error while registering slash command:', error);
  }
})();
