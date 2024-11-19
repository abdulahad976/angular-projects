import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingsComponent } from './star-ratings.component';

describe('StarRatingsComponent', () => {
  let component: StarRatingsComponent;
  let fixture: ComponentFixture<StarRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
