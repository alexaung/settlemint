import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Book, BooksResponse } from './books.model';

interface GoogleBookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

@Injectable()
export class BooksService {
  constructor(private httpService: HttpService) {}

  async searchBooks(query: string, page: number = 0): Promise<BooksResponse> {
    const startIndex = page * 10;
    const response = await this.httpService
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=10`,
      )
      .toPromise();

    const booksResponse: BooksResponse = {
      totalItems: response.data.totalItems,
      books: response.data.items.map((item: GoogleBookItem) => {
        const book: Book = {
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          thumbnail: item.volumeInfo.imageLinks?.thumbnail,
        };
        return book;
      }),
    };

    return booksResponse;
  }
}
