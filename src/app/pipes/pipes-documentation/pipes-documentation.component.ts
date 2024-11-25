import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CardComponent } from '../../components/card/card/card.component';
import { NgFor } from '@angular/common';
import { TruncatePipe } from '../truncate/truncate.pipe';
import { SortByKeyPipe } from '../sortByKey/sort-by-key.pipe';
import { CreditcardformatterPipe } from '../Credit-Card-Formatter/creditcardformatter.pipe';
import { CreditcardinputComponent } from '../components/creditcardinput/creditcardinput.component';
import { FlattenPipe } from '../flattenPipe/flatten.pipe';

@Component({
  selector: 'app-pipes-documentation',
  standalone: true,
  imports: [CardComponent, NgFor, TruncatePipe, SortByKeyPipe, CreditcardformatterPipe,CreditcardinputComponent, FlattenPipe],
  templateUrl: './pipes-documentation.component.html',
  styleUrl: './pipes-documentation.component.scss'
})
export class PipesDocumentationComponent {

objectArray = [
      { value: 'Charlie', id: 1 },
      { value: 'Bob', id: 2 },
      { value: 'Alice', id: 3 }
    ];


    public flattenData = [1,2,[3],[4,[5,6,[7]]]]

    public modifyFlatten(): void{
      console.log(this.flattenData);
      this.flattenData.push(3,5);
      console.log(this.flattenData);

    }

    public reassignFlatten(): void{
      this.flattenData = [...this.flattenData];
    }

}
