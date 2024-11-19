import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent {
// @Input() value  = 0;
public value  = 0;
public myValue  = 0;
@Input() maxValue  = 100;



update(value: number) {
  if (value > this.maxValue) {
    alert('Value cannot be greater than ' + this.maxValue);
  } else if (value < 0) {
    alert('Value cannot be less than 0');
  } else {
    this.myValue = value;
  }
}


}
