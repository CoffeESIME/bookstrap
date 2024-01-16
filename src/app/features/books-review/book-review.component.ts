import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./book-review.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookReviewComponent {
  @Input()
  book!: Book;
}
