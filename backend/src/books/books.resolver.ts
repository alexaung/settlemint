import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book, BooksResponse } from './books.model';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => BooksResponse)
  async searchBooks(
    @Args('query') query: string,
    @Args('page', { type: () => Int, defaultValue: 0 }) page: number,
  ): Promise<BooksResponse> {
    return this.booksService.searchBooks(query, page);
  }
}
