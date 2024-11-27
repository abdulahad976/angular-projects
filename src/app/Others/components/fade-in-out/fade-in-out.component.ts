import { Component } from '@angular/core';
import { fadeInOutAnimation } from '../../fade-in-out-animations/fade-in-out-animations';
import { CommonModule } from '@angular/common';
import { RippleDirective } from '../../../directive/ripple/ripple.directive';

@Component({
  selector: 'app-fade-in-out',
  standalone: true,
  imports: [CommonModule,RippleDirective],
  templateUrl: './fade-in-out.component.html',
  styleUrl: './fade-in-out.component.scss',
  animations : [fadeInOutAnimation]
})
export class FadeInOutComponent {
  public isInDOM = true
}
