import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserComponent } from '../../features/user/user.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        UserComponent
    ],
    templateUrl: `./home.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
