import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SectionsCreationAttrs {
    title: string;
    name: string;
}

@Table({tableName: 'sections'})
export class Sections extends Model<Sections, SectionsCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;
}