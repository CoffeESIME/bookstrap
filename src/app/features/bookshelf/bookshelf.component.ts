import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BookCardComponent } from './bookcard.component';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-bookshelf',
  standalone: true,
  imports: [CommonModule, BookCardComponent, HttpClientModule],
  templateUrl: './bookshelf.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BooksService],
})
export class BookshelfComponent implements OnInit, OnDestroy {
  public dataBooks: Book[] | null = null;
  private subscription: Subscription | null = null;
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.subscription = this.booksService.getData().subscribe(
      (data) => {
        this.dataBooks = data;
      },
      (error) => console.error(error)
    );
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
