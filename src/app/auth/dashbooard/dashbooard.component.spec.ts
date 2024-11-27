import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbooardComponent } from './dashbooard.component';

describe('DashbooardComponent', () => {
  let component: DashbooardComponent;
  let fixture: ComponentFixture<DashbooardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbooardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbooardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
