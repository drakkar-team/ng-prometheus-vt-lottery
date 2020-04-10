import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PlayComponent } from '../play/play.component';
import { LaunchComponent } from '../launch/launch.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children:
      [{ path: 'launch', component: LaunchComponent },
      { path: 'play', component: PlayComponent }],
  },
  {path: '', redirectTo: '/home/launch', pathMatch: 'full'},
  {path: '**', redirectTo: '/home/launch', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
