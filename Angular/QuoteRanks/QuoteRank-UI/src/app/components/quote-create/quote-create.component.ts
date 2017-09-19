import { Quote } from './../../models/quote';
import { QuotesService } from './../../services/quotes.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.scss']
})
export class QuoteCreateComponent implements OnInit {


  @Input() quote: Quote;
  @Output() onCreate = new EventEmitter();

  quoteForm: FormGroup;

  constructor(private fb: FormBuilder, private quotesService: QuotesService) {
    this.createForm();
  }

  createForm(): any {
    this.quoteForm = this.fb.group({
      quoteText: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      author: ['', Validators.required],

    });
  }

  ngOnInit() {
  }

  prepareSaveQuote(): Quote {
    const formModel = this.quoteForm.value;
    const saveQuote: Quote = {
      _id: null,
      quoteText: formModel.quoteText as string,
      author: formModel.author as string,
      votes: 0,
    };
    return saveQuote;
  }


  onSubmit() {
    console.log('trying to save');
    this.quote = this.prepareSaveQuote();
    this.quotesService.create(this.quote).subscribe(data => {

      this.quoteForm.reset();
      this.onCreate.emit();
    });


  }


}
