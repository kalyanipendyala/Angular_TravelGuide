import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerformaceComponent } from './add-performace.component';

describe('AddPerformaceComponent', () => {
  let component: AddPerformaceComponent;
  let fixture: ComponentFixture<AddPerformaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPerformaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerformaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
