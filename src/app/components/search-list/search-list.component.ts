import { Component, Input } from '@angular/core';
import { DebounceClickDirective } from '../../directive/debounceClick/debounce-click.directive';
import { DebounceSearchComponent } from '../debounce-search/debounce-search.component';
import { CommonModule, NgFor } from '@angular/common';
import { FilterTermPipe } from '../../pipes/filterTerm/filter-term.pipe';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [DebounceSearchComponent, CommonModule, FilterTermPipe],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent {

  public searchTerm = '';
  @Input() public items : string[] = [];
  public hasBeenSelected = false

  public updateSearchTerm(term: string): void {
    this.searchTerm = term;
    this.hasBeenSelected = false
  }

  public selectSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = true
  }
}
