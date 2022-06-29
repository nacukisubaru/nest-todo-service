import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiscordModule } from 'discord-nestjs';
import { Groups } from './groups/groups.model';
import { GroupsModule } from './groups/groups.module';
import { Todo } from './todo/todo.model';
import { TodoModule } from './todo/todo.module';
import { DiscordBotService } from './discord-bot/discord-bot.service';
import { DiscordBotModule } from './discord-bot/discord-bot.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Todo, Groups],
            autoLoadModels: true
        }),
        DiscordModule.forRoot({
            token: process.env.TOKEN_DISCORD_BOT,
            commandPrefix: '!',
            // allowGuilds: ['745366351929016363'],
            // denyGuilds: ['520622812742811698'],
            // allowCommands: [
            //   {
            // 	name: 'some',
            // 	channels: ['745366352386326572'],
            // 	users: ['261863053329563648'],
            // 	channelType: ['dm'],
            //   },
            // ],
            // webhook: {
            //   webhookId: 'your_webhook_id',
            //   webhookToken: 'your_webhook_token',
            // },
            // usePipes: [TransformPipe, ValidationPipe],
            // and other discord options
        }),
        TodoModule,
        GroupsModule,
        DiscordBotModule
    ],
    //providers: [DiscordBotService]
})
export class AppModule { }