import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleRateComponent } from './scale-rate.component';

describe('ScaleRateComponent', () => {
  let component: ScaleRateComponent;
  let fixture: ComponentFixture<ScaleRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
