import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrakdiffComponent } from './attrakdiff.component';

describe('AttrakdiffComponent', () => {
  let component: AttrakdiffComponent;
  let fixture: ComponentFixture<AttrakdiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrakdiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrakdiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
