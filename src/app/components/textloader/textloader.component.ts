import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from '../../Models/loader-type.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textloader.component.html',
  styleUrl: './textloader.component.scss'
})
export class TextloaderComponent implements OnInit {

  @Input() public isLoading = false;
  @Input() public loaderType : LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType
  private loading = 'Loading';
  private loadingPeriods = '.\0\0';



  public ngOnInit(): void {
      if(this.loaderType === LoaderType.Loading){
         this.updateLoaderPeriods();
      }
  }

  private updateLoaderPeriods(){
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..\0';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.\0\0';
          currentStep = 0;
          break;         
      }
  },500);
  }


  public get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }

    startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }
}
