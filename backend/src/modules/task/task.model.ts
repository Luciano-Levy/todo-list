import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Task extends Model<Task> {

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    title: string;
    
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    body: string

    @Column({
        type: DataType.BOOLEAN,
        allowNull:false,
        
    })
    done: boolean

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    folder: string

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    user: string
}