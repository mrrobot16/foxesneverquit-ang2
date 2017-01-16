import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3>
      FOXES NEVER QUIT
    </h3>
    <nav>
      <div class="top-bar">
        <li><a [routerLink]="['/']">C</a></li>
        <li><a [routerLink]="['/about']">M</a></li>
        <li><a [routerLink]="['/github', 'angular']">A</a></li>
        <li><a [routerLink]="['/contact']">S</a></li>
      </div>
    </nav>

  <div id="app">
      <main>
          <router-outlet></router-outlet>
      </main>
    </div>

    <!--<footer>
      © Foxes Never Quit 2017
    </footer>-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
