import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './pages/lists/lists.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
    { path: 'tasks', component: ListsComponent },
    { path: 'team', component: TeamComponent },
    { path: '**', pathMatch:'full', redirectTo: 'tasks' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);