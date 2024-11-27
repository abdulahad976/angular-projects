import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card/card.component';
import { FadeInOutComponent } from '../../components/fade-in-out/fade-in-out.component';

@Component({
  selector: 'app-other-documentation',
  standalone: true,
  imports: [CardComponent, FadeInOutComponent],
  templateUrl: './other-documentation.component.html',
  styleUrl: './other-documentation.component.scss'
})
export class OtherDocumentationComponent {

}
