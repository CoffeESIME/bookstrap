import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { BookCardComponent } from './book-card.component';
import { CommonModule } from '@angular/common';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-reading-now',
  standalone: true,
  templateUrl: './reading-now.component.html',
  styleUrls: ['./reading-now.component.css'],
  imports: [BookCardComponent, CommonModule],
})
export class ReadingNowComponent implements OnInit {
  public dataBooks: Book[] =[];
  constructor(
    private dataService: BooksService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.dataBooks = data;
        this.cd.detectChanges();
      },
      (error) => console.error(error)
    );
  }
}
