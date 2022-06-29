import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todo.model';
import { Groups } from 'src/groups/groups.model';

@Module({
    providers: [TodoService],
    controllers: [TodoController],
    imports: [
        //определяем какие модели зарегистрированы в текущей области
        //для того чтобы внедрить зависимость модель в сервис
        SequelizeModule.forFeature([Todo, Groups])
    ]
})
export class TodoModule { }
