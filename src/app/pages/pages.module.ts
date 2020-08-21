import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListsComponent } from './lists/lists.component';
import { TeamComponent } from './team/team.component';
import { AppRoutingModule } from '../app.routes';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    ListsComponent,
    TeamComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
  ],
  exports: [
    ListsComponent,
    TeamComponent,
    PagesComponent
  ]
})
export class PagesModule { }
