import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BooksResponse {
  @Field()
  totalItems: number;

  @Field(() => [Book])
  books: Book[];
}

@ObjectType()
export class Book {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field(() => [String], { nullable: true }) // Set nullable to true
  authors: string[];

  @Field({ nullable: true }) // Thumbnail can be nullable in case it's not available
  thumbnail: string;
}
