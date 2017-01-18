
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class TwitterService {
  tweets_endpoint="http://hootsuite-takedown-rails.herokuapp.com/tweets"
  todos_endpoint = "https://todo-ang.herokuapp.com/todos"
  constructor(private http: Http) {
  }

  getAllTweets() {
    return this.getTweets();
  }

  postMessage(message:string){
    return this.postTweet(message);
  }

  private getTweets():any{
    return this.http.get(this.tweets_endpoint).toPromise().then((res) => {
        return res.json()
      })
  }

  private postTweet(message:string): Observable<any>{
    let tweet = {
      tweet: {
        description:message
      }
    }
    let body = JSON.stringify(tweet);
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
    return this.http.post(this.tweets_endpoint, body, options) // ...using post request
       .map((res:Response) => {
         console.log("res.json(): ", res)
         return res.json()
       }) // ...and calling .json() on the response to return data
       .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}
