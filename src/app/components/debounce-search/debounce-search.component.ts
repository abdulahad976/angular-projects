import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounce, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-debounce-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './debounce-search.component.html',
  styleUrl: './debounce-search.component.scss'
})
export class DebounceSearchComponent {
  public searchTerm: string = '';
  @Input() public placeholder = '';
  @Output() public searchUpdate = new EventEmitter<string>();
  private searchUpdate$ = new Subject<string>();
  
  constructor () {
    this.searchUpdate$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe( value =>{
      this.searchUpdate.emit(value);
    });
   }


  public updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }
}
