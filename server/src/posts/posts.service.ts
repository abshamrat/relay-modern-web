import { Injectable } from '@nestjs/common';
import { Post } from '../graphql.schema';

@Injectable()
export class PostsService {
    private readonly posts: Post[] = [
        {
            id:1,
            title: 'This is my first title',
            content: 'lorem ipsum dolor sit, content will be visible in pitch'
        },
        {
            id:1,
            title: 'This is my first title',
            content: 'lorem ipsum dolor sit, content will be visible in pitch'
        },
        {
            id:1,
            title: 'This is my first title',
            content: 'lorem ipsum dolor sit, content will be visible in pitch'
        },
    ];

    create(post: Post): Post {
        this.posts.push(post);
        return post;
    }

    findAll(): Post[] {
        return this.posts;
    }

    findOneById(id: number): Post {
        return this.posts.find(post => post.id === id);
    }
}