import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  standalone: true,
  imports: [],
  templateUrl: './top-of-page.component.html',
  styleUrl: './top-of-page.component.scss'
})
export class TopOfPageComponent {

  public isShown = false;
  constructor(private viewPortScroller: ViewportScroller) {

  }

  @HostListener('window:scroll') onWindowScroll() {
    const yCoordinate = this.viewPortScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 150;
    }

  public goToTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
