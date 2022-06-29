import { Body, Controller, Post } from '@nestjs/common';
import { OnCommand } from 'discord-nestjs';
import { Message } from 'discord.js';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    
    constructor(private todoService: TodoService) {}

    @Post('/create')
    createTodo(@Body() todoDto: CreateTodoDto) {
       return this.todoService.add(todoDto);
    }
}
