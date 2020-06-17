import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategorySearchModel } from './models/category.search.model';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //GET /categories
  //GET /categories/_id

  @Get()
  public async find(@Query() query: CategorySearchModel) {
    return this.categoryService.find(query);
  }

  @Get(':_id')
  public async findById(@Param('_id') _id: string) {
    return this.categoryService.findById(_id);
  }
}
