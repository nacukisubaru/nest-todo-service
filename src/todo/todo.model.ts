import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({tableName: 'todo'})
export class Todo extends Model {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column({type: DataType.STRING, allowNull: false})
  description: string;
  
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isComplete: boolean;
}