import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from "./task.model";
export declare class TaskService {
    private taskModel;
    constructor(taskModel: typeof Task);
    createTask(task: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    remove(id: number): Promise<void>;
}
