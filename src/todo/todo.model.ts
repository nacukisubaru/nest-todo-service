import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Groups } from 'src/groups/groups.model';

//используем для определения полей которые будут использоваться при запросе(dto)
interface TodoCreationAttrs {
    title: string;
    description: string;
    isComplete: boolean;
}

@Table({tableName: 'todo'})
export class Todo extends Model<Todo, TodoCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column({type: DataType.STRING, allowNull: false})
  description: string;
  
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isComplete: boolean;

  @BelongsTo(() => Groups)
  groupId: number;
}