import { RestApiServiceConfig } from './models/rest-api-service-config';
import { QuotesService } from './services/quotes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { QuoteCreateComponent } from './components/quote-create/quote-create.component';
import { QuoteDisplayComponent } from './components/quote-display/quote-display.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteCreateComponent,
    QuoteDisplayComponent,
    QuoteListComponent
  ],
  entryComponents: [ModalConfirmComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [QuotesService,
    RestApiServiceConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
