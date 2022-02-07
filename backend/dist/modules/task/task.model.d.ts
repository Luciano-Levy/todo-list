import { Model } from 'sequelize-typescript';
export declare class Task extends Model<Task> {
    taskId: number;
    title: string;
    done: boolean;
    folder: string;
    user: string;
}
