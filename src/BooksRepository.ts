import Book from "./interfaces/Book";

export default abstract class BooksRepository {
  createBook(book: Book): void;
  getBook(id: number): Book | null;
  getBooks(): Book[];
  updateBook(id: number, updatedBook: Book): void;
  deleteBook(id: number): void;
}
