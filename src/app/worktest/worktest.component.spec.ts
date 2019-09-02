import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktestComponent } from './worktest.component';

describe('WorktestComponent', () => {
  let component: WorktestComponent;
  let fixture: ComponentFixture<WorktestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
