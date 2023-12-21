import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book.model';
import { ApiResponse } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private url: string = 'https://www.dbooks.org/api/search/python';
  private data$: Observable<Book[]> | null = null;
  constructor(private http: HttpClient) {}
  getData(): Observable<Book[]> {
    if (!this.data$) {
      this.data$ = this.http.get<ApiResponse>(this.url).pipe(
        map((response) =>
          response.books.map((book, index) =>
            index % 3 === 0
              ? {
                  ...book,
                  price: Math.random() * 12,
                  users_choice: true,
                  status: 'Reading',
                  percentage: Math.random() * 100,
                  genre: 'Engineer',
                }
              : {
                  ...book,
                  price: Math.random() * 12,
                  users_choice: false,
                  status: 'Read',
                  percentage: Math.random() * 100,
                  genre: 'Engineer',
                }
          )
        )
      );
    }
    return this.data$;
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, shareReplay, tap, map } from 'rxjs';
// import { Book } from '../models/book.model';

// export class DataService {
//   private url: string = 'https://www.dbooks.org/api/search/python';
//   private data$?: Observable<Book[]>;

//   constructor(private http: HttpClient) {}

//   getData(): Observable<Book[]> {
//     if (!this.data$) {
//       this.data$ = this.http.get<ApiResponse>(this.url).pipe(
//         map((response) =>
//           response.books.map((book, index) =>
//             index % 3 === 0
//               ? {
//                   ...book,
//                   price: Math.random() * 12,
//                   users_choice: true,
//                   status: 'Reading',
//                   percentage: Math.random() * 100,
//                   genre: 'Engineer',
//                 }
//               : {
//                   ...book,
//                   price: Math.random() * 12,
//                   users_choice: false,
//                   status: 'Read',
//                   percentage: Math.random() * 100,
//                   genre: 'Engineer',
//                 }
//           )
//         ),
//         tap((books) => console.log('Books:', books)),
//         shareReplay(1)
//       );
//     }
//     return this.data$;
//   }
// }
