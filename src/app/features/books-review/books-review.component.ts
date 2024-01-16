import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
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
  @Input() dataBooks!: Book[] ;
}
