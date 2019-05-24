import { UseGuards, ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Post, CreatePostInput } from '../graphql.schema';
import { PostsGuard } from './posts.guard';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

const pubSub = new PubSub();

@Resolver('Post')
export class PostsResolvers {
    constructor(private readonly postsService: PostsService) {}

    @Query()
    @UseGuards(PostsGuard)
    async getPosts() {
        return this.postsService.findAll();
    }

    @Query('post')
    async findOneById(
        @Args('id', ParseIntPipe)
        id: number,
    ): Promise<Post> {
        return await this.postsService.findOneById(id);
    }


  @Mutation('createPost')
  async create(@Args('createPostInput') args: CreatePostInput): Promise<Post> {
    const createdPost = await this.postsService.create(args);
    pubSub.publish('postCreated', { postCreated: createdPost });
    return createdPost;
  }

  @Subscription('postCreated')
  postCreated() {
    return pubSub.asyncIterator('postCreated');
  }
}