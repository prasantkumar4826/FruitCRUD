import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyWarningAlertComponent } from './early-warning-alert.component';

describe('EarlyWarningAlertComponent', () => {
  let component: EarlyWarningAlertComponent;
  let fixture: ComponentFixture<EarlyWarningAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyWarningAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarlyWarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
