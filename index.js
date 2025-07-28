import { Client, GatewayIntentBits } from "discord.js";
import { config } from "./config.js";
import dotenv from 'dotenv';
import fetch from "node-fetch";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.on("ready", () => {
  console.log(` Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Ignore bots

  if (message.content === "ping") {
    return message.reply("pong");
  }

  if (message.content === "hello") {
    return message.reply("or bhai kaise ho");
  }

  if (message.content.startsWith("create ")) {
    const url = message.content.slice(7).trim();

    // Simple URL validation
    try {
      new URL(url);
    } catch {
      return message.reply(" Please provide a valid URL.");
    }

    try {
      const response = await fetch(`${config.SHORTIFY_API_URL}/url/public`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.BOT_SECRET_KEY}`  // <-- Add secret key here
        },
        body: JSON.stringify({ originalUrl: url }),  // <-- use key your backend expects
      });

      if (!response.ok) {
        const errMsg = await response.text();
        console.error("Backend error:", errMsg);
        return message.reply("❌ Failed to shorten URL. Backend error.");
      }

      const data = await response.json();

      return message.reply(`✅ Your shortened URL: ${data.shortUrl}`);
    } catch (error) {
      console.error("Error shortening URL:", error);
      return message.reply("❌ Something went wrong while generating short URL.");
    }
  }
});

client.login(config.DISCORD_STRING);
