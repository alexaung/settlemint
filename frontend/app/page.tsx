"use client";

import { useQuery } from "@apollo/client";
import { SEARCH_BOOKS } from "@/graphql/queries/books";
import {
  BookCard,
  SearchBar,
  Pagination,
  CenteredContainer,
} from "@components";
import { QueryData, Book } from "@types";

export interface FilterProps {
  query: string;
  page: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export default function Home({ searchParams }: HomeProps) {
  console.log("searchParams", searchParams);
  const query = searchParams.query;
  const page =
    typeof searchParams.page === "string"
      ? parseInt(searchParams.page, 10)
      : searchParams.page || 1;

  // Initialize loading, error, and data outside of the useQuery hook
  let loading = false;
  let error;
  let data;

  // Only execute the query if there's a search term
  if (query) {
    console.log("query", query);
    const queryResult = useQuery<QueryData>(SEARCH_BOOKS, {
      variables: { query, page },
      skip: !query, // if there's no query, skip the GraphQL request
    });

    loading = queryResult.loading;
    error = queryResult.error;
    data = queryResult.data;
  }

  const totalItems = data?.searchBooks?.totalItems || 0;
  const totalPages = Math.ceil(totalItems / 10);
  const allBooks = data?.searchBooks.books;

  if (loading)
    return (
      <CenteredContainer>
        <p>Loading...</p>
      </CenteredContainer>
    );
  if (error)
    return (
      <CenteredContainer>
        <p>Error: {error.message}</p>
      </CenteredContainer>
    );

  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Book Catalogue</h1>
          <p>Explore our books you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>

        {allBooks && allBooks.length > 0 && totalItems > 0 ? (
          <section>
            <div className="home__books-wrapper">
              {allBooks.map((book: Book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </div>

            <Pagination currentPage={page} totalPages={totalPages} />
          </section>
        ) : (
          query && (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            </div>
          )
        )}
      </div>
    </main>
  );
}
