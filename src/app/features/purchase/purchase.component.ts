import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseComponent {
  public dataBooks$: Observable<Book[]>;

  constructor(private booksService: BooksService) {
    this.dataBooks$ = this.booksService.getData();
  }
}