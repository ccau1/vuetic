import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryModel, Category } from './interfaces/category';
import { CategorySearchModel } from './models/category.search.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Categories')
    private readonly categoryRepository: CategoryModel,
  ) {}

  protected async castQuery(
    search: CategorySearchModel,
  ): Promise<{ [key: string]: any }> {
    // initiate query's $and array
    const queryAnd = [];

    if (search._ids) {
      queryAnd.push({
        _id: { $in: search._ids },
      });
    }

    // return object optionally with $and field
    // $and performs a logical AND operation on an array
    // and selects the documents that satisfy all the expressions in the array
    return queryAnd.length ? { $and: queryAnd } : {};
  }

  public async find(search: CategorySearchModel): Promise<Category[]> {
    const q = await this.castQuery(search);
    return this.categoryRepository.find(q);
  }

  public async findOne(search: CategorySearchModel): Promise<Category> {
    const q = await this.castQuery(search);
    return this.categoryRepository.findOne(q).populate('parent');
  }

  public async findById(_id: string): Promise<Category> {
    return this.categoryRepository.findById(_id);
  }
}
