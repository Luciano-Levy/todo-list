import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(task: CreateTaskDto): Promise<Task>;
    findOne(user: string): Promise<Task[]>;
    update(taskId: number, updateTaskDto: UpdateTaskDto): Promise<void>;
    remove(taskId: number): Promise<void>;
}
