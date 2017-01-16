import {Component} from '@angular/core';
import {MessageComponent} from '../message/message.component';
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  template: `

  <div class="dashboard">
    <div class="dashboard-container">
        <h3>JUST TWEET IT</h3>
    </div>
    <div class="just-tweet-it-form">
      <message>
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
