import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card/card.component';
import { AccordianComponent } from './components/accordian/accordian/accordian.component';
import { AccordianItem } from './accordian-item-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, CardComponent,AccordianComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-challenges';

  public accordianItems: AccordianItem[]=[
      {
        title : "Example1",
        content : "Pakistan",
        isExpanded: false
      },
      {
        title : "Example2",
        content : "Australia",
        isExpanded: false
      },      {
        title : "Example3",
        content : "England",
        isExpanded: false
      },
      {
        title : "Example4",
        content : "UAE",
        isExpanded: false
      }
  ]
}
