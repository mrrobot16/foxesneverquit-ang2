import {Component} from '@angular/core';

@Component({
  selector: 'message',
  styleUrls: ['./message.component.css'],
  template: `
  <div class="message">
    <form>
      <div class="form-group">
        <input type="text" placeholder="JUST TWEET IT">
      </div>
    </form>
  </div>
  `
})
export class MessageComponent {
}
