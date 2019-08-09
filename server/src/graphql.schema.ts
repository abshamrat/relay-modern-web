
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateCatInput {
    name?: string;
    age?: number;
}

export class CreatePostInput {
    title?: string;
    content?: string;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;

    abstract createPost(createPostInput?: CreatePostInput): Post | Promise<Post>;
}

export class Post {
    id?: number;
    title?: string;
    content?: string;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract cat(id: string): Cat | Promise<Cat>;

    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract post(id: string): Post | Promise<Post>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;

    abstract postCreated(): Post | Promise<Post>;
}
