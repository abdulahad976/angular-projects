import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CardComponent } from '../../components/card/card/card.component';
import { NgFor } from '@angular/common';
import { TruncatePipe } from '../truncate/truncate.pipe';
import { SortByKeyPipe } from '../sortByKey/sort-by-key.pipe';
import { CreditcardformatterPipe } from '../Credit-Card-Formatter/creditcardformatter.pipe';

@Component({
  selector: 'app-pipes-documentation',
  standalone: true,
  imports: [CardComponent, NgFor, TruncatePipe, SortByKeyPipe, CreditcardformatterPipe],
  templateUrl: './pipes-documentation.component.html',
  styleUrl: './pipes-documentation.component.scss'
})
export class PipesDocumentationComponent {

objectArray = [
      { value: 'Charlie', id: 1 },
      { value: 'Bob', id: 2 },
      { value: 'Alice', id: 3 }
    ];

}
