import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
     selector: 'app-book-card',
    standalone: true,
    templateUrl: './bookcard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BookCardComponent{

}