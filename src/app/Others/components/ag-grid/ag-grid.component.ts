import { Component, Input } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; 


@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [TableComponent, AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss'
})
export class AgGridComponent {
   public tableData = [
    {first: 'Abdul', last : 'Ahad', dob: '10/05/2005', age: 21, living: true},
    {first: 'Ali', last : 'Mukarram', dob: '12/09/2007', age: 25, living: true},
    {first: 'Adeel', last : 'Ahmad', dob: '09/07/2002', age: 22, living: false},
    {first: 'Abrar', last : 'Afzal', dob: '12/03/2010', age: 32, living: true},
    {first: 'Farhan', last : 'Asghar', dob: '01/01/2000', age: 20, living: false},
    {first: 'Zain', last : 'Aslam', dob: '10/05/2005', age: 21, living: true},
    {first: 'Ali', last : 'Mukarram', dob: '12/09/2007', age: 25, living: true},
    {first: 'Bashir', last : 'Ahmad', dob: '09/07/2002', age: 22, living: false},
    {first: 'Saim', last : 'Afzal', dob: '12/03/2010', age: 32, living: true},
    {first: 'Maaz', last : 'Khan', dob: '01/01/2000', age: 20, living: false},
    {first: 'Adeel', last : 'Ahmad', dob: '09/07/2002', age: 22, living: false},
    {first: 'Abrar', last : 'Afzal', dob: '12/03/2010', age: 32, living: true},
    {first: 'Farhan', last : 'Asghar', dob: '01/01/2000', age: 20, living: false},
    {first: 'Zain', last : 'Aslam', dob: '10/05/2005', age: 21, living: true},
    {first: 'Ali', last : 'Mukarram', dob: '12/09/2007', age: 25, living: true},
    {first: 'Bashir', last : 'Ahmad', dob: '09/07/2002', age: 22, living: false},
    {first: 'Saim', last : 'Afzal', dob: '12/03/2010', age: 32, living: true},
    {first: 'Maaz', last : 'Khan', dob: '01/01/2000', age: 20, living: false},
    {first: 'Adeel', last : 'Ahmad', dob: '09/07/2002', age: 22, living: false},
    {first: 'Abrar', last : 'Afzal', dob: '12/03/2010', age: 32, living: true},
    {first: 'Farhan', last : 'Asghar', dob: '01/01/2000', age: 20, living: false},
    {first: 'Zain', last : 'Aslam', dob: '10/05/2005', age: 21, living: true},
    {first: 'Ali', last : 'Mukarram', dob: '12/09/2007', age: 25, living: true},
    {first: 'Bashir', last : 'Ahmad', dob: '09/07/2002', age: 22, living: false},
    {first: 'Saim', last : 'Afzal', dob: '12/03/2010', age: 32, living: true},
    {first: 'Maaz', last : 'Khan', dob: '01/01/2000', age: 20, living: false},

  ]

  colDefs : ColDef[] = [
    {field: 'first', headerName: 'First Name', filter: true},
    {field: 'last', headerName: 'Last Name'},
    {field: 'dob', headerName: 'Date of Birth'},
    {field: 'age', headerName: 'Age',
     cellStyle: (params)=>{
      if (params.value > 25) {
        return { backgroundColor: '#f8f8f8' };
      }
      return { backgroundColor: '#bebebe' };
    }},
    {field: 'living', headerName: 'Living or Dead', editable: true,}
  ]


  gridOptions = {
    getRowStyle: (params: any) => {
      if (params.data.living === true) {
        return { backgroundColor: 'goldenrod' };  
      }
      return {backgroundColor: 'lightblue'};
    }
  };
  



  public paginationPageSizeSelector = [5, 9, 10,20,50,100]
  defaultColDef = {

    flex: 1,
    minWidth: 100,
    cellStyle :{
      fontSize : '17px',
    }
  }
}
