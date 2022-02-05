import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Task extends Model<Task> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    id: number;


    @Column({
        type: DataType.STRING,
        //allowNull:false
    })
    title: string;
    
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    body: string

    @Column({
        type: DataType.BOOLEAN,
        //allowNull:false,
        
    })
    done: boolean

    @Column({
        type: DataType.STRING,
        //allowNull:false
    })
    folder: string
}