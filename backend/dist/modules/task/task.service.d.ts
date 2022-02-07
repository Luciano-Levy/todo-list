import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from "./task.model";
export declare class TaskService {
    private taskModel;
    constructor(taskModel: typeof Task);
    createTask(task: CreateTaskDto): Promise<Task>;
    findAll(user: string): Promise<Task[]>;
    findOne(user: string): Promise<Task>;
    update(taskId: number, updateTaskDto: UpdateTaskDto): Promise<void>;
    remove(taskId: number): Promise<void>;
}
