import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    //внедрение зависимости модели в todo service
    constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

    async add(dto:CreateTodoDto) {
        return await this.todoRepository.create(dto);
    }

    update() {

    }

    delete() {

    }

}
