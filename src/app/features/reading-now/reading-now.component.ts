import { BookCardComponent } from './book-card.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-reading-now',
  templateUrl: './reading-now.component.html',
  standalone: true,
  imports: [BookCardComponent, CommonModule],
})
export class ReadingNowComponent {
  @Input() dataBooks!: Book[] ;
}
