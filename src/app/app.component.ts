import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3>
      Foxes never quit
    </h3>
    <nav class="top-bar">
    	<a [routerLink]="['/']">
        C
      </a>
      |
    	<a [routerLink]="['/about']">
        M
      </a>
      |
    	<a [routerLink]="['/github', 'angular']">
        A
      </a>
      |
    	<a [routerLink]="['/contact']">
        S
      </a>
    </nav>


    <nav class="side-bar">
    	<a [routerLink]="['/']">
        FB
      </a>
      |
    	<a [routerLink]="['/about']">
        TW
      </a>
      |
    	<a [routerLink]="['/github', 'angular']">
        IG
      </a>

    </nav>

    <div id="app">
      <main>
          <router-outlet></router-outlet>
      </main>
    </div>

    <footer>
      © Foxes Never Quit 2017
    </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
