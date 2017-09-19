import { environment } from './../../environments/environment';

import { RestApiServiceConfig } from './../models/rest-api-service-config';
import { AbstractRestApiService } from './abstract-rest-api.service';
import { IQuote } from './../models/iquote';
import { Quote } from './../models/quote';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class QuotesService extends AbstractRestApiService<Quote> {
  // Extend/Overwrite the QuoteService as Needed;
  private quoteCreatedSource = new Subject();
  // Observable string streams
  quoteAnnounced$ = this.quoteCreatedSource.asObservable();

  announceQuoteCreated() {
    console.log('announceNewQuote');
    this.quoteCreatedSource.next();
  }

  constructor(http: HttpClient, config: RestApiServiceConfig) {
    super(http, config);
    config.url = `${environment.apiUrl}/quotes`;
  }

  create(obj: Quote): Observable<Object> {
    const result = super.create(obj);
    return result;

  }


}
