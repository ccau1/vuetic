import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { TodoModel } from "./interfaces/Todo";
import { TodoCreateModel } from "./models/todo.create.model";
import { TodoUpdateModel } from "./models/todo.update.model";

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('Todos') private readonly todoRepository: TodoModel
  ) {
    
  }

  public async find() {
    return this.todoRepository.find();
  }

  public async create(todo: TodoCreateModel) {
    return this.todoRepository.create(todo);
  }

  public async update(_id: string, todo: TodoUpdateModel) {
    return this.todoRepository.findByIdAndUpdate(_id, todo, {new: true});
  }

  public async delete(_id: string) {
    return this.todoRepository.findByIdAndDelete(_id);
  }
}