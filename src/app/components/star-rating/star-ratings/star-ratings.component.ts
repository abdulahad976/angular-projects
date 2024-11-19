import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './star-ratings.component.html',
  styleUrl: './star-ratings.component.scss'
})
export class StarRatingsComponent {

@Input() public rating = 5;
public get fullStars(): number[] {
  const totalFullStars = Math.floor(this.rating);

  return Array(totalFullStars).fill(0);
}


public get hasHalfStar(): boolean {
  const highestRating = 5;
  const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;

  return hasHalfStar
}

public get emptyStars(): number[] {
  const highestRating = 5;
  let totalEmptyStars = Math.floor(highestRating - this.rating);

  if (((this.rating * 10) % 10) < 5 && ((this.rating * 10) % 10) > 0) {
      totalEmptyStars += 1
  }
  return Array(totalEmptyStars)

}


}