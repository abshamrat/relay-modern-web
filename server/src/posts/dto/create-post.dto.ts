import { Min } from 'class-validator';
import { CreatePostInput } from '../../graphql.schema';

export class CreatePostDto extends CreatePostInput {
  @Min(1)
  title: string;
}