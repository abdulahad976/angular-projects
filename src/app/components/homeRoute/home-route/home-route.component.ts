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

@Component({
  selector: 'app-home-route',
  standalone: true,
  imports: [ToolbarComponent, CardComponent,AccordianComponent,
    ProgressbarComponent, StarRatingsComponent, LoaderComponent,
    TextloaderComponent,TwitterpostComponent, ModalComponent,
    QuoteComponent, ToggleComponent, RichTextViewerComponent,
    DebounceSearchComponent, SearchListComponent]
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


    debounceSearch(value: string) {
      console.log(value);
    }




}
