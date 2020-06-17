import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostModel, Post } from './interfaces/post';
import { PostSearchModel } from './models/post.search.model';
import { PostCreateModel } from './models/post.create.model';
import { PostUpdateModel } from './models/post.update.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Posts')
    private readonly postRepository: PostModel,
  ) { }

  protected async castQuery(
    search: PostSearchModel,
  ): Promise<{ [key: string]: any }> {
    // initiate query's $and array
    const queryAnd = [];

    if (search._ids) {
      queryAnd.push({
        //The $in operator selects the documents
        //where the value of a field equals any value in the specified array
        _id: { $in: search._ids },
      });
    }

    // return object optionally with $and field
    // $and performs a logical AND operation on an array and
    // selects the documents that satisfy all the expressions in the array
    return queryAnd.length ? { $and: queryAnd } : {};
  }

  protected async generateSlug(
    title: string,
    options: { requireUniqueSlug: boolean },
  ): Promise<string> {
    const slug = title
      .toString()
      .toLowerCase() //Create URL-Friendly String
      .trim()
      .replace(/[\s_]+/g, '-') // Replace spaces and underscore with -
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\d\-]+/, '') // Remove all special characters
      .replace(/[\-]+/g, '-'); // Replace multiple - with single -

    if (!options.requireUniqueSlug) {
      return slug;
    } else {
      //Retrieve the result with the largest number
      const existingSlug = await this.postRepository
        .findOne({ slug: new RegExp(`^${slug}(-([0-9]+))?$`, 'i') })
        .sort({ slug: -1 });
      if (!existingSlug) {
        return slug;
      } else {
        const regex = new RegExp(`^${slug}(-([0-9]+))?$`, 'i');
        //An array with the title, -numbers and numbers
        //Ex: existingSlug.slug = "abc-123"
        //    existingSlugMatched = ["abc", "-123", "123"]
        const existingSlugMatched = existingSlug.slug.match(regex);

        // Check if there are numbers after the title ("123")
        if (existingSlugMatched && !isNaN(parseInt(existingSlugMatched[2]))) {
          // If yes, add 1 to the number (123 => 124)
          const slugify = `${slug}-${parseInt(existingSlugMatched[2], 10) + 1}`;
          return slugify;
        } else {
          // Otherwise, assign a number (-1)
          return `${slug}-1`;
        }
      }
    }
  }

  public async find(search: PostSearchModel): Promise<Post[]> {
    const q = await this.castQuery(search);
    return this.postRepository.find(q).exec();
  }

  public async findOne(search: PostSearchModel): Promise<Post> {
    const q = await this.castQuery(search);
    return this.postRepository.findOne(q);
  }

  public async findById(_id: string): Promise<Post> {
    return this.postRepository.findById(_id);
  }

  public async findBySlug(slug: string): Promise<Post> {
    return this.postRepository.findOne({ slug: slug.toLowerCase() });
  }

  public async create(createItem: PostCreateModel): Promise<Post> {
    const slug = await this.generateSlug(createItem.title.en, {
      requireUniqueSlug: true,
    });

    createItem.slug = slug;

    return this.postRepository.create(createItem);
  }

  public async update(_id: string, updateItem: PostUpdateModel): Promise<Post> {
    return this.postRepository.findByIdAndUpdate(
      _id,
      {
        ...updateItem,
        // categories: updateItem.categories.map(c => new ObjectId(c))
      },
      { new: true, }
    );
  }

  public async archive(_id: string, isArchived: boolean = true): Promise<Post> {
    return this.postRepository.findByIdAndUpdate(
      _id,
      { isArchived },
      { new: true },
    );
  }

  public async delete(_id: string) {
    return this.postRepository.findByIdAndDelete(_id);
  }
}
