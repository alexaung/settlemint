export interface Author {
  name: string;
}

export interface Book {
  id: string;
  title: string;
  authors: Author[];
  thumbnail: string;
}

export interface QueryData {
  searchBooks: {
    books: Book[];
    totalItems: number;
  };
}
