import { BelongsTo, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Todo } from 'src/todo/todo.model';

interface GroupsCreationAttrs {
    id: number;
    name: string;
}

@Table({ tableName: 'groups' })
export class Groups extends Model<Groups, GroupsCreationAttrs> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @HasMany(() => Todo)
    todos: Todo[];
}