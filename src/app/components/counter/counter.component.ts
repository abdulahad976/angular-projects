import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() public counter = 0;
  @Input() public min = 0;
  @Input() public max = Number.MAX_SAFE_INTEGER;


  public minusOne(): void {
    if(this.min < this.counter){
      this.counter--;
    }
  }

  public plusOne(): void {
    if(this.max > this.counter){
      this.counter++;
    }
  }
}
