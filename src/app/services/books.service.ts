import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book.model';
import { ApiResponse } from '../models/api.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data$: Observable<Book[]> | null = null;
  constructor(private http: HttpClient) {}
  getData(): Observable<Book[]> {
    if (!this.data$) {
      this.data$ = this.http.get<ApiResponse>(environment.apiUrl).pipe(
        map((response) =>
          response.books.map((book, index) =>
            index % 3 === 0
              ? {
                  ...book,
                  price: Math.random() * 12,
                  users_choice: true,
                  status: 'Reading',
                  percentage: Math.random() * 100,
                  genre: 'Science',
                }
              : {
                  ...book,
                  price: Math.random() * 12,
                  users_choice: false,
                  status: 'Read',
                  percentage: Math.random() * 100,
                  genre: 'Science',
                }
          )
        )
      );
    }
    return this.data$;
  }
}