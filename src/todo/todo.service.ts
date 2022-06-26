import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    //внедрение зависимости модели в todo service
    constructor(@InjectModel(Todo) private todo: typeof Todo) {}

    add() {

    }

    update() {

    }

    delete() {

    }

}
