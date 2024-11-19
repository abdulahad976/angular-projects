import { Component,Input } from '@angular/core';
import { AccordianItem } from '../../../accordian-item-interface';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [NgFor,NgIf, CommonModule],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss'
})
export class AccordianComponent {
@Input() public items: AccordianItem[] = [];

public toggle(item: AccordianItem): void {
  item.isExpanded = !item.isExpanded; 

}
}