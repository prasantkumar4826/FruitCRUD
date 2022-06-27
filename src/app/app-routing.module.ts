import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:  '', component:  HomeComponent},
  { path:  'home', component:  HomeComponent},
  {
    path: 'early-warning-alert-list',
    loadChildren: () => import('./early-warning-alert/early-warning-alert.module').then(m => m.EarlyWarningAlertModule)
  },
  {
    path: 'early-warning-alert-list/:view',
    loadChildren: () => import('./early-warning-alert/early-warning-alert.module').then(m => m.EarlyWarningAlertModule)
  },
  {
    path: 'early-warning-alert-list/:view/:id',
    loadChildren: () => import('./early-warning-alert/early-warning-alert.module').then(m => m.EarlyWarningAlertModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
