import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCreateComponent } from './components/player-create/player-create.component';
import { PlayerGameStatusesComponent } from './components/player-game-statuses/player-game-statuses.component';
import { PlayerAdminComponent } from './components/player-admin/player-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerCreateComponent,
    PlayerGameStatusesComponent,
    PlayerAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
