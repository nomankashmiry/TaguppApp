import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';
import { WallComponent } from './wall/wall.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
{path: '', component: HomeComponent},
{
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'edit', component: EditComponent, canActivate: [AuthGuard]},
        {path: 'profile', component: ProfileComponent},
        {path: 'wall', component: WallComponent}   
    ]
},
{path: '**', redirectTo: '', pathMatch: 'full'}



];
