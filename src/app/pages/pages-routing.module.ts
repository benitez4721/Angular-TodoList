import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { TeamComponent } from './team/team.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: ListsComponent},
      {path: 'tasks', component: ListsComponent},
      {path: 'team', component: TeamComponent},
      {path: '**', redirectTo: '/dashboard/tasks', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
