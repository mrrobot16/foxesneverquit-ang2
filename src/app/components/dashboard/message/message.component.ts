import {Component,  OnInit} from '@angular/core';
import {TwitterService} from '../../../services/twitter/twitter.service';
@Component({
  selector: 'message',
  styleUrls: ['./message.component.css'],
  template: `
  <div class="message">
    <form (submit)="postMessage(message.value)">
      <div class="form-group">
        <input [(ngModel)]='dateTime' ng2-datetime-picker/>
        <input type="text" #message placeholder="JUST TWEET IT">
      </div>
    </form>
  </div>
  `
})
export class MessageComponent implements OnInit {
  dateTime: any;
  constructor(private twitter:TwitterService){

  }

  ngOnInit(){

  }


  getTweets(){
    return this.twitter.getAllTweets().then(res=>console.log(res))
  }

  postMessage(message:string){
    console.log("message", message);
    return this.twitter.postMessage(message).subscribe(
            res => {
              console.log("res: ", res)
            },
            err => {
                console.log("err: ", err)
              }
        )
  }
}
