import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardinputComponent } from './creditcardinput.component';

describe('CreditcardinputComponent', () => {
  let component: CreditcardinputComponent;
  let fixture: ComponentFixture<CreditcardinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditcardinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcardinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
