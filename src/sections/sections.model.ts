import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SectionsCreationAttrs {
    title: string;
    name: string;
}

@Table({tableName: 'sections'})
export class Todo extends Model<Todo, SectionsCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;
}