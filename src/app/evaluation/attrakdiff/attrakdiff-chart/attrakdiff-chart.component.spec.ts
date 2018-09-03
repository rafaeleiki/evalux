import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrakdiffChartComponent } from './attrakdiff-chart.component';

describe('AttrakdiffChartComponent', () => {
  let component: AttrakdiffChartComponent;
  let fixture: ComponentFixture<AttrakdiffChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrakdiffChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrakdiffChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
