import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './bookcard.component.html',
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  @Input()
  book: Book | null = null;
}
