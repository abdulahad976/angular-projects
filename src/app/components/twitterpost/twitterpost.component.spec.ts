import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterpostComponent } from './twitterpost.component';

describe('TwitterpostComponent', () => {
  let component: TwitterpostComponent;
  let fixture: ComponentFixture<TwitterpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterpostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
