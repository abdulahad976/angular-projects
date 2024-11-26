import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() public tableData = [
    {first: 'Abdul', last : 'Ahad', dob: '10/05/2005'},
    {first: 'Ali', last : 'Mukarram', dob: '12/09/2007'},
    {first: 'Adeel', last : 'Ahmad', dob: '09/07/2002'},
    {first: 'Abrar', last : 'Afzal', dob: '12/03/2010'},
    {first: 'Farhan', last : 'Asghar', dob: '01/01/2000'},


  ]
}
