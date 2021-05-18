import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    myQuote : any= {
    id: 1,
    quote: String,
    by: String
  }

quote=[new Quote("My Quote","Gagan",1)]
  constructor() {
    // let index = this.quote.indexof(kwot);
    // this.quote.splice(index,1);
    // return false;
}

  ngOnInit(): void {
    this.myQuote.quote = "The journey of a thousand miles begins with one step.";
    this.myQuote.by= "Lao Tzu";
  }

}
