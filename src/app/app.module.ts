import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ListsComponent } from './pages/lists/lists.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamComponent } from './pages/team/team.component';
import { HeaderLinksComponent } from './components/header-links/header-links.component';
import { APP_ROUTING } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListsComponent,
    TeamComponent,
    HeaderLinksComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
