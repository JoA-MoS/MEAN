import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteCreateComponent } from './components/quote-create/quote-create.component';
import { QuoteDisplayComponent } from './components/quote-display/quote-display.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCreateComponent,
    QuoteDisplayComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
