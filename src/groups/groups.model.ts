import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface GroupsCreationAttrs {
    id: number;
    name: string;
}

@Table({tableName: 'groups'})
export class Groups extends Model<Groups, GroupsCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;
}