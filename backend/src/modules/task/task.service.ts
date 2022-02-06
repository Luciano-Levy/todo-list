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

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskModel.update(
      updateTaskDto,{
        where : {
          id
        }
      }
    )
  }

  async remove(id: number): Promise<void> {
    const task = await this.taskModel.findOne({
      where: {
        id,
      }
    })
    await task.destroy()
  }
}
