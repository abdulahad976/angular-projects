import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitterpost',
  standalone: true,
  imports: [],
  templateUrl: './twitterpost.component.html',
  styleUrl: './twitterpost.component.scss'
})
export class TwitterpostComponent {
@Input()  public baseHref = 'https://www.linkedin.com/in/abdul-ahad-b2b207201/';
@Input() public hashTags : string[] = ['AbdulAhad', 'Javascript', 'Angular', 'Typescript', '100-Angular-Challenges'];


constructor(public titleService : Title) {}

public get twitterUrl(): string {
  const base = this.getBaseWithHashTagsAndRoute();
  const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a Coding Expert`);
  return `${base}${message}`
}
private getBaseWithHashTagsAndRoute(){
  const route = encodeURI(this.baseHref);
  const hashTags = this.hashTags.join(',');
  return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=pizzapokerguy&url=${route}`
}


public get linkedinUrl(): string {
  const base = this.getBaseWithHashTagsAndRouteForLinkedIn();
  const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a Coding Expert`);
  return `${base}${message}`

}


private getBaseWithHashTagsAndRouteForLinkedIn(){ 
  const route = encodeURI(this.baseHref);
  const hashTags = this.hashTags.join(',');
  return `https://www.linkedin.com/sharing/share-offsite/?url=&hashtags=${encodeURIComponent(hashTags)}&related=abdul-ahad-b2b207201`;

}


}
