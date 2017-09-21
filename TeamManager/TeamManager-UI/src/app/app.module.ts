import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { RestApiServiceConfig } from './models/rest-api-service-config';
import { PlayerService } from './services/player/player.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCreateComponent } from './components/player-create/player-create.component';
import { PlayerGameStatusesComponent } from './components/player-game-statuses/player-game-statuses.component';
import { PlayerAdminComponent } from './components/player-admin/player-admin.component';
import { GameAdminComponent } from './components/game-admin/game-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderByNamePipe } from './order-by-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerCreateComponent,
    PlayerGameStatusesComponent,
    PlayerAdminComponent,
    GameAdminComponent,
    OrderByNamePipe,
    ModalConfirmComponent

  ],
  entryComponents: [ModalConfirmComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [PlayerService,
    RestApiServiceConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
