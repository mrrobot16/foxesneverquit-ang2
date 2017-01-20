import {Component} from '@angular/core';
import {MessageComponent} from './message/message.component';
import {FirebaseComponent} from './firebase.component';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  template: `

  <div class="dashboard">
    <div class="dashboard-container">
        <h3>JUST TWEET IT</h3>
    </div>
    <div class="just-tweet-it-form">
      <message></message>
    </div>


  </div>

  `
})
export class DashboardComponent {
}
