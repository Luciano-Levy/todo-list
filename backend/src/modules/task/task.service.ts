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

  async findAll(user: string) : Promise<Task[]> {
    return this.taskModel.findAll({
      where: {
        user,
      }
    })
  }

  findOne(user: string): Promise<Task>{
    return this.taskModel.findOne({
      where: {
        user,
      }
    })
  }

  update(user: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${user} task`;
  }

  async remove(user: string): Promise<void> {
    const task = await this.findOne(user)
    await task.destroy()
  }
}
