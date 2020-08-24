import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTeamModalComponent } from './create-team-modal/create-team-modal.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CreateTeamModalComponent,
    HeaderLinksComponent
  ],
  exports: [
    CreateTeamModalComponent,
    HeaderLinksComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
