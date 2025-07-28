## shortify-discord-bot
## 🤖 Shortify Discord Bot — Seamless URL Shortening in Discord
This repository **(shortify-discord-bot)** contains the Discord bot client that integrates with the [`shortify-backend`](https://github.com/SHISHIR1507/shortify-backend) API to provide seamless URL shortening directly inside Discord.

## 💡 What Is This Bot?

   A Discord bot that listens to messages and slash commands like /create <longURL>

Sends authenticated requests to the Shortify backend’s /url/public API endpoint

Returns shortened URLs inside Discord channels, enabling fast, convenient sharing

Does not generate short URLs itself — it relies on the backend API for all logic and storage

Secured using a shared secret key via the Authorization header when calling the backend

## 🔌 Quickstart: How to Use the Bot

1. Invite your bot to a Discord server with appropriate permissions.

2. In any channel, type:

```
create https://example.com/very/long/url
```
3. The bot will reply with:

```
Your shortened URL: https://shortify.onrender.com/url/abc123
```
## 📁 Project Structure
```
shortify-discord-bot/
├── command.js         # Registers slash commands with Discord API
├── config.js          
├── index.js           # Main bot logic: message handling and API calls
├── package.json
├── .env              
```
## 🔧 Local Development
1. Clone and install dependencies:


```
git clone https://github.com/SHISHIR1507/shortify-discord-bot.git
cd shortify-discord-bot
npm install
```
2. Create a .env file with:

```
DISCORD_STRING=<your_discord_bot_token>
CLIENT_ID=<your_discord_app_client_id>
SHORTIFY_API_URL=https://shortify-backend.onrender.com
BOT_SECRET_KEY=<your_bot_secret_key>
```
3. Run the bot locally:

```
node index.js
```
4. Register slash commands (run once):

```
node command.js
```

## 🤝 Related Projects
Shortify Backend API : [`shortify-backend`](https://github.com/SHISHIR1507/shortify-backend)
The core URL shortening API that powers this bot.
