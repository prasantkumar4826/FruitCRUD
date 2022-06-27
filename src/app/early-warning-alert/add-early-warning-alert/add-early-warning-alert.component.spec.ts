import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEarlyWarningAlertComponent } from './add-early-warning-alert.component';

describe('AddEarlyWarningAlertComponent', () => {
  let component: AddEarlyWarningAlertComponent;
  let fixture: ComponentFixture<AddEarlyWarningAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEarlyWarningAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEarlyWarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
