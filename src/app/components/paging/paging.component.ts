import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paging.component.html',
  styleUrl: './paging.component.scss'
})
export class PagingComponent {
  @Input() public totalItems = 1;
  @Input() public pageSize = 25;
  @Input() public currentPage = 1;
  @Input() public step = 2;
  @Output() public pageChange : EventEmitter<Number> = new EventEmitter();

  public get totalPages(){
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1))
  }

  public get isFirstPage(): boolean{
    return this.currentPage === 1
  }

  public get isLastPage(): boolean{
    return this.currentPage === this.totalPages;
  }

  public get isNextDisabled(): boolean{
    return this.currentPage +  this.step > this.totalPages
  }

  public get ispreviousDisabled(): boolean{
    return this.currentPage - this.step < 1;

  }
  public get pages(): number[]{
    const pages = []

    if(this.currentPage > 1){
      pages.push(this.currentPage - 1)
    }
    pages.push(this.currentPage)

    if(this.currentPage < this.totalPages){
      pages.push(this.currentPage + 1)
    }

    // if(this.currentPage + 1 < this.totalPages){
    //   pages.push(this.currentPage + 2)
    // }

    if(this.currentPage +1 < this.totalPages && this.currentPage === 1){
      pages.push(this.currentPage + 3)
    }

    return pages
    }


    public setPage(page:number){
      this.currentPage = page;
      this.pageChange.emit(page)

    }
  }

