import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';
import { FirebaseService } from '../../services/firebase/firebase.service'

@Component({
  selector: 'firebase',
  styleUrls: ['./dashboard.component.css'],
  template: `

  <div class="firebase">
    <div class="firebase-container">
        <h3>JUST FIREBASE IT IT</h3>
    </div>
    <div class="firebase-data">
      <input type="text" placeholder="write your username" [(ngModel)]="user_name">
      <input type="password" placeholder="write your password" [(ngModel)]="password">
      <input type="submit" value="save name" (click)="saveUserData()">
    </div>
  </div>

  `
})

export class FirebaseComponent {
  user_name: string;
  password: string;
  constructor(private firebase_service: FirebaseService ){

  }

  saveUserData(){
    console.log(this.user_name)
    console.log(this.password)
  return this.firebase_service.postUserName(this.user_name, this.password)
  }



}
