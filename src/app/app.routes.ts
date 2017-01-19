import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about';
import { NoContentComponent } from './components/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './components/+detail#DetailModule'},
  { path: 'barrel', loadChildren: './components/+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
