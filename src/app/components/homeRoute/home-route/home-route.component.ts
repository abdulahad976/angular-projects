import { Component } from '@angular/core';
import { ToolbarComponent } from '../../toolbar/toolbar.component';
import { CardComponent } from '../../card/card/card.component';
import { AccordianComponent } from '../../accordian/accordian/accordian.component';
import { StarRatingsComponent } from '../../star-rating/star-ratings/star-ratings.component';
import { ProgressbarComponent } from '../../progressbar/progressbar/progressbar.component';
import { AccordianItem } from '../../../accordian-item-interface';
import { LoaderComponent } from '../../loader/loader.component';
import { TextloaderComponent } from '../../textloader/textloader.component';
import { LoaderType } from '../../../Models/loader-type.enum';
import { TwitterpostComponent } from '../../twitterpost/twitterpost.component';
import { ModalComponent } from '../../modal/modal.component';
import { QuoteComponent } from '../../quote/quote.component';
import { ToggleComponent } from '../../toggle/toggle.component';
import { RichTextViewerComponent } from '../../rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from '../../debounce-search/debounce-search.component';
import { SearchListComponent } from '../../search-list/search-list.component';
import { CounterComponent } from '../../counter/counter.component';
import { TableComponent } from '../../table/table.component';
import { PagingComponent } from '../../paging/paging.component';
import { TabsComponent } from '../../tabs/tabs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-route',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, CardComponent,AccordianComponent,
    ProgressbarComponent, StarRatingsComponent, LoaderComponent,
    TextloaderComponent,TwitterpostComponent, ModalComponent,
    QuoteComponent, ToggleComponent, RichTextViewerComponent,
    DebounceSearchComponent, SearchListComponent, CounterComponent,
    TableComponent, PagingComponent, TabsComponent]
    ,
 templateUrl: './home-route.component.html',
  styleUrl: './home-route.component.scss'
})
export class HomeRouteComponent {
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


    public loaderType = LoaderType.Loading ;
    public toggleValue = false


    public tabs: {title: string, active: boolean}[] = [
      {title: 'Table tab', active: true},
      {title: 'Paging tab', active: true},
      {title: 'Counter tab', active: false}

    ]
    public selectedTab = 0;
    debounceSearch(value: string) {
      console.log(value);
    }



}
