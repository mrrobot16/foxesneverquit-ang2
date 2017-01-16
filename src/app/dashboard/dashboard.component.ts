import {Component} from '@angular/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  template: `
  <div class="dashboard">
    <div class="dashboard-container">
        <h3>JUST TWEET IT</h3>
    </div>
    <div class="postit-form">
      
    </div>
  </div>
  <nav>
    <div class="side-bar">
      <li><a [routerLink]="['/']">FB</a></li>
      <li><a [routerLink]="['/about']">TW</a></li>
      <li><a [routerLink]="['/github', 'angular']">IG</a></li>
    </div>
  </nav>
  `
})
export class DashboardComponent {
}
