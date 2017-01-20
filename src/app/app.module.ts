// Angular2 Objects
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule,PreloadAllModules} from '@angular/router';

// AngularFire
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "./app.firebase";

// Platform and Environment providers/directives/pipes
import { ENV_PROVIDERS } from './environment';

// Routes
import { ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './components/home';
import { MessageComponent } from './components/dashboard/message/message.component'
import { FirebaseComponent } from './components/dashboard/firebase.component'
import { AboutComponent } from './components/about';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoContentComponent } from './components/no-content';
import { XLargeDirective } from './components/home/x-large';


// Services
import { TwitterService } from './services/twitter/twitter.service';
import { FirebaseService } from './services/firebase/firebase.service';

// Styles
import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessageComponent,
    FirebaseComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    TwitterService,
    FirebaseService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

}
