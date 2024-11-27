import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-sort-table',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './sort-table.component.html',
  styleUrl: './sort-table.component.scss'
})
export class SortTableComponent {
  @Input() public tableData = [
    {first: 'Abdul', last : 'Ahad', dob: '10/05/2005', age: 21, living: true},
    {first: 'Ali', last : 'Mukarram', dob: '12/09/2007', age: 25, living: true},
    {first: 'Adeel', last : 'Ahmad', dob: '09/07/2002', age: 22, living: false},
    {first: 'Abrar', last : 'Afzal', dob: '12/03/2010', age: 32, living: true},
    {first: 'Farhan', last : 'Asghar', dob: '01/01/2000', age: 20, living: false},
  ]

  public sortDirection = true

  public sort(headerData: {key: string, value: any}): void {
    const {key, value} = headerData;
    this.sortDirection = !this.sortDirection;

    switch(true){ 
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;

        case typeof value === 'number':
          this.sortNumber(key);

        break;


        case this.isDate(value):
          this.sortDate(key);
        break;
        
        case typeof value === 'string':
          this.sortString(key);
        break;
    }
  }



  private sortBoolean(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
        if(this.sortDirection){
          return Number(value1[key])- Number(value2[key])
        }
        else{
          return Number(value2[key])- Number(value1[key])

        }
      
    })
  }

  private sortNumber(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
        if(this.sortDirection){
          return Number(value1[key])- Number(value2[key])
        }
        else{
          return Number(value2[key])- Number(value1[key])

        }
      
    })
  }

  private sortDate(value: string): void {
    this.tableData.sort((value1: any, value2: any) => {
        if(this.sortDirection){
          return new Date(value1[value]).getTime() - new Date(value2[value]).getTime()
        }
        else{
          return new Date(value2[value]).getTime() - new Date(value1[value]).getTime()
        }
    })
  }

  private isDate(value: any){
    const parsedDate = Date.parse(value);
    return isNaN(value) && !isNaN(parsedDate)
  } 
  private sortString(key: string): void {
    this.tableData.sort((i: any, j: any) => {
      const value1 = String(i[key]).toUpperCase();
        const value2 = String(j[key]).toUpperCase();

        if(this.sortDirection){
          if(value1 > value2){
            return -1
          }
          if(value2 > value2){
            return 1
          }
          return 0
        }
        else{
          if(value2 > value1){
            return -1
          }
          if(value1 > value2){
            return 1
          }
          return 0
        }
      
    })
  }


}
