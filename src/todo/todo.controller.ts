import { Body, Controller, Post } from '@nestjs/common';
import { Content, Context, OnCommand } from 'discord-nestjs';
import { Message } from 'discord.js';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
    
    constructor(private todoService: TodoService) {}

    // @Post('/create')
    // createTodo(@Body() todoDto: CreateTodoDto) {
    //    return this.todoService.add(todoDto);
    // }

    @OnCommand({ name: 'createTodo' })
    async onCommandCreate( @Content() content: CreateTodoDto,
    @Context() [context]: [Message],): Promise<void> {
        await context.reply(`Execute command: ${content}`);
    }
}
