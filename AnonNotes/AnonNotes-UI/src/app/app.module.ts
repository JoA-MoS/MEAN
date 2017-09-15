import { NoteService } from './services/notes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteCreateComponent } from './components/note-create/note-create.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCreateComponent,
    NoteListComponent,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
