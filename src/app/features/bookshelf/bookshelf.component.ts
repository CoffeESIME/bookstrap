import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
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
  @Input() dataBooks!: Book[] ;
}
