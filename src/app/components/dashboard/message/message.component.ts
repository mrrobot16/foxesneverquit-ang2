/// <reference path="../../../../../typings/modules/flatpickr/index.d.ts" />
// Angular 2 Objects
import {Component,  OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import {TwitterService} from '../../../services/twitter/twitter.service';
import * as Flatpickr from "flatpickr";

@Component({
  selector: 'message',
  styleUrls: ['./message.component.css'],
  template: `
  <div class="message">
    <form [formGroup]="messageForm" (submit)="postMessage()">
      <div class="form-group" >
        <textarea (keyup.enter)="postMessage()" formControlName='message' type="text" placeholder="JUST TWEET IT"></textarea>
        <input id="schedule_time" type="text" formControlName="schedule_time" placeholder="Schedule tweet?">
        <input id="post-tweet" type="submit" value="Tweet It!">
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
    var datepicker = document.getElementById("schedule_time")
    var date = new Flatpickr(datepicker, {
      enableTime: true,
      utc:true
    })

    this.messageForm = this.formBuilder.group({
      message:[''],
      schedule_time:[]
    })

  }


  getTweets(){
    return this.twitter.getAllTweets().then(res=>console.log(res))
  }

  postMessage(){
    return this.twitter.postMessage(this.messageForm.value).subscribe(
            res => {
              console.log("res: ", res)
            },
            err => {
                console.log("err: ", err)
              }
        )
  }
}
