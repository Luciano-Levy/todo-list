import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import {Task} from './modules/task/task.model'
import {TaskModule} from './modules/task/task.module'

@Module({
  imports: [ TaskModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      
      host: 'ec2-18-235-114-62.compute-1.amazonaws.com',
      port: 5432,
      username: 'ehfkhssccsjgmb',
      password: '95da092774ba113d4a759c4b6bfbceeb346cc1ffeb68001967848c446efd74c2',
      database: 'd3dgoop7jp7tk0',
      models: [Task],
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
