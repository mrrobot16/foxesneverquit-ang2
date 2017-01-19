// Angular2 Objects
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { rootRouterConfig } from './app.routes';

// Libraries

// Routes



// Services
import { GithubService } from './components/github/shared/github.service';
import { TwitterService } from './services/twitter/twitter.service';
// Components
import { AppComponent } from './app.component';
import { MessageComponent } from './components/dashboard/message/message.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RepoBrowserComponent } from './components/github/repo-browser/repo-browser.component';
import { RepoListComponent } from './components/github/repo-list/repo-list.component';
import { RepoDetailComponent } from './components/github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService,TwitterService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
