/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <div id="app">
    <nav class="upper-bar">
      <a [routerLink]=" ['./dashboard'] " routerLinkActive="active">
        C
      </a>
      <a [routerLink]=" ['./home'] " routerLinkActive="active">
        M
      </a>
      <a [routerLink]=" ['./detail'] " routerLinkActive="active">
        A
      </a>
      <a [routerLink]=" ['./barrel'] " routerLinkActive="active">
        S
      </a>
      <a [routerLink]=" ['./about'] " routerLinkActive="active">
        D
      </a>
    </nav>
    <nav class="side-bar">
      <a [routerLink]=" ['./fb'] " routerLinkActive="active">
        FB
      </a>
      <a [routerLink]=" ['./home'] " routerLinkActive="active">
        TW
      </a>
      <a [routerLink]=" ['./detail'] " routerLinkActive="active">
        IG
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>



<!--    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->

    <footer>
      <span>&copy; 2017 FOXES NEVER QUIT by <a [href]="url">HG</a></span>
      <!-- <div>
       <a [href]="url">
          <img [src]="logo" width="25%">
        </a>
      </div>-->
    </footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  public logo = 'assets/img/angularclass-avatar.png';
  public name = 'FOXES NEVER QUIT';
  public url = "/"

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {

  }

}
