
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import {AngularFire} from "angularfire2"
@Injectable()
export class FirebaseService {
  constructor(private firebase: AngularFire) {
  }

  getNames(){

  }

  postUserName(user, password){
    console.log("user: ", user, "password: ",password)
  }

}
