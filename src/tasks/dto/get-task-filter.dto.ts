/* eslint-disable prettier/prettier */
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { TaskStatus } from "../task.model";
import { TasksService } from "../tasks.service";

export class GetTaskFilterDto {
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;
    
    @IsOptional()
    @IsNotEmpty()
    search: string;
}