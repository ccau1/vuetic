import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoCreateModel } from './models/todo.create.model';
import { TodoUpdateModel } from './models/todo.update.model';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  public async find() {
    return this.todoService.find();
  }

  @Post()
  public async create(@Body() body: TodoCreateModel) {
    console.log('create', body);

    return this.todoService.create(body);
  }

  @Put(':_id')
  public async update(
    @Param('_id') _id: string,
    @Body() body: TodoUpdateModel,
  ) {
    console.log('update', _id, body);

    return this.todoService.update(_id, body);
  }

  @Delete(':_id')
  public async delete(@Param('_id') _id: string) {
    return this.todoService.delete(_id);
  }
}
