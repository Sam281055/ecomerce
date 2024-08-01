import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendCardComponent } from './recomend.card.component';

describe('RecomendCardComponent', () => {
  let component: RecomendCardComponent;
  let fixture: ComponentFixture<RecomendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
