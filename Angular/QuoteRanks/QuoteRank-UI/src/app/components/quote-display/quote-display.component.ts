import { ModalConfirmComponent } from './../modal-confirm/modal-confirm.component';
import { QuotesService } from './../../services/quotes.service';
import { Quote } from './../../models/quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.scss']
})
export class QuoteDisplayComponent implements OnInit {

  @Input() quote: Quote;
  @Output() onVote = new EventEmitter();
  @Output() onDelete = new EventEmitter<Quote>();

  closeResult: string;
  constructor(private quotesService: QuotesService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  voteQuoteUp() {
    this.quote.votes += 1;
    this.onVote.emit();
    this.quotesService.update(this.quote._id, this.quote).subscribe(data => console.log(data));

  }

  voteQuoteDown() {
    this.quote.votes -= 1;
    this.onVote.emit();
    this.quotesService.update(this.quote._id, this.quote).subscribe(data => console.log(data));
  }

  deleteQuote() {
    const modalRef = this.modalService.open(ModalConfirmComponent);

    modalRef.componentInstance.title = 'DELETE';
    modalRef.componentInstance.message = `Are you sure you want to delete the quote: "${this.quote.quoteText}"`;
    modalRef.result.then((data) => {
      console.log(data);
      if (data) {
        this.quotesService.delete(this.quote._id).subscribe(res => console.log(res));
        this.onDelete.emit(this.quote);
      }
    }, (reason) => {
      // console.log(reason);
    });
    //
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
