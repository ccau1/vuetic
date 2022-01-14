import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostSearchModel } from './models/post.search.model';
import { PostCreateModel } from './models/post.create.model';
import { PostUpdateModel } from './models/post.update.model';
import { CurrentUser } from '../../core/decorators/currentUser.decorator';
import { User } from '../User/interfaces/user';
import { AuthGuard } from '../Auth/user.auth.guard';
import { Locale } from '../../core/decorators/locale.decorator';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }

  //Routes
  //GET /posts
  //GET /posts/:_id
  //GET /posts/slugs/:slug
  //POST /posts
  //PUT /posts/:_id
  //PUT /posts/archive/:_id
  //DELETE /posts/:_id

  @Get()
  public async find(@Query() query: PostSearchModel, @Locale() locale) {
    console.log('locale', locale);

    const posts = await this.postService.find(query);

    return posts.map(p => {
      const pJ = p.toJSON();
      return { ...pJ, title: pJ.title[locale], content: pJ.content[locale] };
    });
  }

  @Get(':_id')
  public async findById(@Param('_id') _id: string, @Locale() locale) {
    const pJ = (await this.postService.findById(_id)).toJSON();
    return { ...pJ, title: pJ.title[locale], content: pJ.content[locale] };
  }

  @Get('/slugs/:slug')
  public async findBySlug(@Param('slug') slug: string, @Locale() locale) {
    const pJ = (await this.postService.findBySlug(slug)).toJSON();
    return { ...pJ, title: pJ.title[locale], content: pJ.content[locale] };
  }

  @Post()
  @UseGuards(AuthGuard())
  public async create(
    @Body() body: PostCreateModel,
    @CurrentUser() currentUser: User,
  ) {
    console.log('create', body);

    return this.postService.create({
      ...body,
      createdBy: currentUser._id.toHexString(),
    });
  }

  @Put(':_id')
  @UseGuards(AuthGuard())
  public async update(
    @Param('_id') _id: string,
    @Body() body: PostUpdateModel,
  ) {
    console.log('update', _id, body);

    return this.postService.update(_id, body);
  }

  @Put('archive/:_id')
  @UseGuards(AuthGuard())
  public async archive(@Param('_id') _id: string) {
    console.log('update', _id);

    return this.postService.archive(_id);
  }

  @Delete(':_id')
  @UseGuards(AuthGuard())
  public async delete(@Param('_id') _id: string) {
    return this.postService.delete(_id);
  }
}
