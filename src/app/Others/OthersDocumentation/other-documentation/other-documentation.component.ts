import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card/card.component';
import { FadeInOutComponent } from '../../components/fade-in-out/fade-in-out.component';
import { AgGridComponent } from '../../components/ag-grid/ag-grid.component';

@Component({
  selector: 'app-other-documentation',
  standalone: true,
  imports: [CardComponent, FadeInOutComponent, AgGridComponent],
  templateUrl: './other-documentation.component.html',
  styleUrl: './other-documentation.component.scss'
})
export class OtherDocumentationComponent {
  
}
