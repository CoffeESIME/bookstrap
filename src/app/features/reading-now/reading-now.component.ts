import { BookCardComponent } from './book-card.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reading-now',
  templateUrl: './reading-now.component.html',
  standalone: true,
  imports: [BookCardComponent, CommonModule],
})
export class ReadingNowComponent implements OnInit {
  public dataBooks$!: Observable<Book[]> ;

  constructor(private dataService: BooksService) {}

  ngOnInit(): void {
    this.dataBooks$ = this.dataService.getData();
  }
}
