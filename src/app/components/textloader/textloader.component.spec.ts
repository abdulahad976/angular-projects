import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextloaderComponent } from './textloader.component';

describe('TextloaderComponent', () => {
  let component: TextloaderComponent;
  let fixture: ComponentFixture<TextloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextloaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
