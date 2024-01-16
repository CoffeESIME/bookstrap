import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserComponent } from '../../features/user/user.component';
import { BookshelfComponent } from '../../features/bookshelf/bookshelf.component';
import { ReadingNowComponent } from '../../features/reading-now/reading-now.component';
import { PurchaseComponent } from '../../features/purchase/purchase.component';
import { BooksReviewComponent } from '../../features/books-review/books-review.component';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    UserComponent,
    BookshelfComponent,
    ReadingNowComponent,
    PurchaseComponent,
    BooksReviewComponent
  ],
  templateUrl: `./home.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{
  public dataBooks$!: Observable<Book[]> ;

  constructor(private dataService: BooksService) {}

  ngOnInit(): void {
    this.dataBooks$ = this.dataService.getData();
  }
}
