import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CardComponent } from '../../components/card/card/card.component';
import { DebounceClickDirective } from '../debounceClick/debounce-click.directive';
import { RippleDirective } from '../ripple/ripple.directive';

@Component({
  selector: 'app-directive-documentation',
  standalone: true,
  imports: [CardComponent, DebounceClickDirective, RippleDirective],
  templateUrl: './directive-documentation.component.html',
  styleUrl: './directive-documentation.component.scss'
})
export class DirectiveDocumentationComponent {
  public log(): void {
    console.log('Directive Clicked');
  }
}
