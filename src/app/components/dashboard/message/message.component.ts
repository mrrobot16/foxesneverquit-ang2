import {Component} from '@angular/core';
import {TwitterService} from '../../../services/twitter/twitter.service';
@Component({
  selector: 'message',
  styleUrls: ['./message.component.css'],
  template: `
  <div class="message">
    <form (submit)="getTweets()">
      <div class="form-group">
        <input type="text" placeholder="JUST TWEET IT" (keyenter)="testing()">
      </div>
    </form>
  </div>
  `
})
export class MessageComponent {
  constructor(private twitter_service:TwitterService){

  }

  testing(){

  }

  getTweets(){
    this.twitter_service.getTweets();
  }

  postMessage(){

  }
}
