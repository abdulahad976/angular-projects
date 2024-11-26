import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() public tabs: {title: string, active: boolean}[]= [];
  @Output() public selectedTabIndex = new EventEmitter<number>();

  public selectTab(selected: {title: string, active: boolean}, index: number): void{
    this .tabs.forEach((tab) =>{
      tab.active = (selected == tab);
    })

    this.selectedTabIndex.emit(index)
  }

}
