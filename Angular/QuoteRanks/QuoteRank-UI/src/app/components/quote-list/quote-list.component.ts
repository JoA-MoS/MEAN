import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { Quote } from './../../models/quote';
import { QuotesService } from './../../services/quotes.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit, OnDestroy {
  public quotesObservable: Observable<Quote[]>;
  // subscription: Subscription;
  // time = new Observable<string>((observer: Subscriber<string>) => {
  //   setInterval(() => observer.next(new Date().toString()), 1000);
  // });

  constructor(private quotesService: QuotesService) {
    // this.subscription = quotesService.quoteAnnounced$.subscribe(
    //   quote => {
    //     console.log('Subscription');
    //     this.getQuotes();
    //   });
    // this.getQuotes();
    this.quotesObservable = this.quotesService.getAll().map((data) => {
      data.sort((a, b) => {
        return a.votes < b.votes ? 1 : -1;
      });
      return data;
    });
  }

  ngOnInit() {
  }


  // getQuotes() {
  //   console.log('Getting Quotes');
  //   this.quotesService.getAll().subscribe(quotes => {
  //     this.quotes = quotes;
  //     this.sortQuotes();
  //   },
  //     (err: HttpErrorResponse) => {
  //       console.log(err.error);
  //       console.log(err.name);
  //       console.log(err.message);
  //       console.log(err.status);
  //     });
  // }

  // sortQuotes() {
  //   this.quotes.sort((a: Quote, b: Quote) => {
  //     if (a.votes < b.votes) {
  //       return 1;
  //     } else if (a.votes > b.votes) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }

  // onVote() {
  //   this.sortQuotes();
  // }

  onDelete(q: Quote) {
    const index: number = this.quotesObservable.indexOf(q);
    this.quotesObservable.subscribe()
    if (index !== -1) {
      this.quotes.splice(index, 1);
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    // this.subscription.unsubscribe();
  }
}
