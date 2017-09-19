import { PlayerAdminComponent } from './components/player-admin/player-admin.component';
import { PlayerGameStatusesComponent } from './components/player-game-statuses/player-game-statuses.component';
import { PlayerCreateComponent } from './components/player-create/player-create.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  {
    path: 'players', component: PlayerAdminComponent, children: [
      { path: '', component: PlayerListComponent },
      { path: 'new', component: PlayerCreateComponent },
    ]
  },
  { path: 'games', redirectTo: '/games/1/statuses', pathMatch: 'full' },
  { path: 'games/:id/statuses', component: PlayerGameStatusesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
