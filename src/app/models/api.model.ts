import { Book } from './book.model';

export interface ApiResponse {
  status: string;
  total: number;
  books: Book[];
}
