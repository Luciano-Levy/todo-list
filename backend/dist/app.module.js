"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sequelize_1 = require("@nestjs/sequelize");
const task_model_1 = require("./modules/task/task.model");
const task_module_1 = require("./modules/task/task.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [task_module_1.TaskModule,
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'ec2-18-235-114-62.compute-1.amazonaws.com',
                port: 5432,
                username: 'ehfkhssccsjgmb',
                password: '95da092774ba113d4a759c4b6bfbceeb346cc1ffeb68001967848c446efd74c2',
                database: 'd3dgoop7jp7tk0',
                models: [task_model_1.Task],
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false
                    }
                }
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map