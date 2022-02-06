import { Model } from 'sequelize-typescript';
export declare class Task extends Model<Task> {
    title: string;
    body: string;
    done: boolean;
    folder: string;
    user: string;
}
