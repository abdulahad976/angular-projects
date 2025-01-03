import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  @Input() public quote = '';
  @Input() public author = '';
  @Input() public occupation = '';
}
