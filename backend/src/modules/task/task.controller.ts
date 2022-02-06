import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() task: CreateTaskDto) {
    
    return this.taskService.createTask(task);
  }
  /*
  @Get()
  findAll() {
    return this.taskService.findAll()
  }*/

  @Get(':user')
  findOne(@Param('user') user: string) {
    return this.taskService.findAll(user);
  }

  @Patch(':user')
  update(@Param('user') user: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(user, updateTaskDto);
  }

  @Delete(':user')
  remove(@Param('user') user: string) {
    return this.taskService.remove(user);
  }
}
