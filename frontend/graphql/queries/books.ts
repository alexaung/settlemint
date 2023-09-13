import gql from "graphql-tag";

export const SEARCH_BOOKS = gql`
  query SearchBooks($query: String!, $page: Int!) {
    searchBooks(query: $query, page: $page) {
      books {
        id
        title
        authors
        thumbnail
      }
      totalItems
    }
  }
`;
