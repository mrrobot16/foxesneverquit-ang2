import { Routes } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RepoBrowserComponent } from './components/github/repo-browser/repo-browser.component';
import { RepoListComponent } from './components/github/repo-list/repo-list.component';
import { RepoDetailComponent } from './components/github/repo-detail/repo-detail.component';
import { ContactComponent } from './components/contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent }
];
