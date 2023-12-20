import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './user.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent { }
