import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { BookCardComponent } from './bookcard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookshelf',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './bookshelf.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookshelfComponent {
  public dataBooks$: Observable<Book[]>;

  constructor(private booksService: BooksService) {
    this.dataBooks$ = this.booksService.getData();
  }
}
