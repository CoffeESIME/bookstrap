import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { BookReviewComponent } from './book-review.component';

@Component({
  selector: 'app-books-review',
  standalone: true,
  templateUrl: `./books-review.component.html`,
  imports: [CommonModule, BookReviewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksReviewComponent {
  public dataBooks$: Observable<Book[]>;

  constructor(private booksService: BooksService) {
    this.dataBooks$ = this.booksService.getData();
  }
}
