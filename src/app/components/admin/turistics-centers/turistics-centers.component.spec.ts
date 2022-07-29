import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristicsCentersComponent } from './turistics-centers.component';

describe('TuristicsCentersComponent', () => {
  let component: TuristicsCentersComponent;
  let fixture: ComponentFixture<TuristicsCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuristicsCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristicsCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
