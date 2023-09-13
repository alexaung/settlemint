import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';

@Module({
  imports: [HttpModule],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
