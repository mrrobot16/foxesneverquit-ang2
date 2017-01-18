// Angular 2 Objects
import {Component,  OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import {TwitterService} from '../../../services/twitter/twitter.service';
@Component({
  selector: 'message',
  styleUrls: ['./message.component.css'],
  template: `
  <div class="message">
    <form [formGroup]="messageForm" (submit)="postMessage()">
      <div class="form-group">
        <input formControlName='message' type="text" placeholder="JUST TWEET IT">
        <input type="date" formControlName="schedule_time">
      </div>
    </form>
  </div>

  `
})
export class MessageComponent implements OnInit {
  messageForm: FormGroup
  constructor(private twitter:TwitterService, private formBuilder:FormBuilder){

  }

  ngOnInit(){
    this.messageForm = this.formBuilder.group({
      message:[''],
      schedule_time:[new Date()]
    })
  }


  getTweets(){
    return this.twitter.getAllTweets().then(res=>console.log(res))
  }

  postMessage(message:string){
    console.log("this.messageForm", this.messageForm);

    return this.twitter.postMessage(this.messageForm.value.message).subscribe(
            res => {
              console.log("res: ", res)
            },
            err => {
                console.log("err: ", err)
              }
        )
  }
  postMessage2(){
    console.log("this.messageForm", this.messageForm)
    // return this.twitter.postMessage("postMessage2 from ang2").subscribe(
    //         res => {
    //           console.log("res: ", res)
    //         },
    //         err => {
    //             console.log("err: ", err)
    //           }
    //     )
  }
}
