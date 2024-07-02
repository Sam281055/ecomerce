import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSmallComponent } from './carousel-small.component';

describe('CarouselSmallComponent', () => {
  let component: CarouselSmallComponent;
  let fixture: ComponentFixture<CarouselSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
