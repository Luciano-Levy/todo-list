import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/sequelize';
import {Task} from "./task.model"

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task
  ) {}

  createTask(task:CreateTaskDto): Promise<Task> {
    return this.taskModel.create(task)
  }

  async findAll() : Promise<Task[]> {
    return this.taskModel.findAll()
  }

  findOne(id: number): Promise<Task>{
    return this.taskModel.findOne({
      where: {
        id,
      }
    })
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number): Promise<void> {
    const task = await this.findOne(+id)
    await task.destroy()
  }
}
