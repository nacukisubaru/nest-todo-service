import { Injectable, Logger } from '@nestjs/common';
import { Client, ClientProvider, Once, OnCommand } from 'discord-nestjs';
import { Message } from 'discord.js';

@Injectable()
export class DiscordBotService {
  private readonly logger = new Logger(DiscordBotService.name);

  @Client()
  discordProvider: ClientProvider;

  @Once({ event: 'ready' })
  onReady(): void {
    this.logger.log(
      `Logged in as ${this.discordProvider.getClient().user.tag}!`,
    );
  }

  @OnCommand({ name: 'start' })
  async onCommand(message: Message): Promise<void> {
    await message.reply(`Execute command: ${message.content}`);
  }
}