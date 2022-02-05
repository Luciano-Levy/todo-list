import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(task: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    remove(id: number): Promise<void>;
}
