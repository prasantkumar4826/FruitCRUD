import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarlyWarningAlertComponent } from './early-warning-alert.component';

const routes: Routes = [
  {
    path: '',
    component: EarlyWarningAlertComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarlyWarningAlertRoutingModule { }
