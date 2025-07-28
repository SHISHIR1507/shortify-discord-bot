import dotenv from 'dotenv';
dotenv.config();

const config = {
    DISCORD_STRING: process.env.DISCORD_STRING,
    CLIENT_ID: process.env.CLIENT_ID,
    SHORTIFY_API_URL: process.env.SHORTIFY_API_URL,
    BOT_SECRET_KEY: process.env.BOT_SECRET_KEY
}

export {config}