import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookCardComponent } from './bookcard.component';

@Component({
    selector: 'app-bookshelf',
    standalone: true,
    imports: [
        CommonModule,
        BookCardComponent
    ],
    templateUrl: './bookshelf.component.html',
    styleUrl: './bookshelf.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookshelfComponent { }
