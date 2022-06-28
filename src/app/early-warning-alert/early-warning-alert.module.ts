import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EarlyWarningAlertRoutingModule } from './early-warning-alert-routing.module';
import { EarlyWarningAlertComponent } from './early-warning-alert.component';
import { AddEarlyWarningAlertComponent } from './add-early-warning-alert/add-early-warning-alert.component';


@NgModule({
  declarations: [
    EarlyWarningAlertComponent,
    AddEarlyWarningAlertComponent
  ],
  imports: [
    CommonModule,
    EarlyWarningAlertRoutingModule,
    FormsModule
  ]
})
export class EarlyWarningAlertModule { }
