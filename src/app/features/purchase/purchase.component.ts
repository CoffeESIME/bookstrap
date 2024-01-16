import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';


@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseComponent {
 @Input() dataBooks!: Book[] ;
}