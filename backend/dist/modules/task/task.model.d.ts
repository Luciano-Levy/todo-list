import { Model } from 'sequelize-typescript';
export declare class Task extends Model<Task> {
    id: number;
    title: string;
    body: string;
    done: boolean;
    folder: string;
}
