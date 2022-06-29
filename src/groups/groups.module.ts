import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from 'src/todo/todo.model';
import { Groups } from './groups.model';
import { GroupsService } from './groups.service';

@Module({
    providers: [GroupsService],
    imports: [
        SequelizeModule.forFeature([Groups, Todo])
    ]
})
export class GroupsModule { }
