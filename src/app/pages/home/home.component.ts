import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserComponent } from '../../features/user/user.component';
import { BookshelfComponent } from '../../features/bookshelf/bookshelf.component';
import { ReadingNowComponent } from '../../features/reading-now/reading-now.component';
import { PurchaseComponent } from '../../features/purchase/purchase.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    UserComponent,
    BookshelfComponent,
    ReadingNowComponent,
    PurchaseComponent
  ],
  templateUrl: `./home.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
