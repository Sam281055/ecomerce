import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductVerticalComponent } from './card-product-vertical.component';

describe('CardProductVerticalComponent', () => {
  let component: CardProductVerticalComponent;
  let fixture: ComponentFixture<CardProductVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProductVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
